# frozen_string_literal: true

class InspectFirebaseIdToken::InspectPayload
  include Interactor

  ISSUER_BASE_URL = "https://securetoken.google.com/"

  def call
    context.fail!(error: "Missing payload!") unless pass_payload_inspection?
  end

  private

  def pass_payload_inspection?
    not_over_limit_exp? &&
      not_will_iat? &&
      intended_aud? &&
      intended_iss? &&
      str_sub? &&
      not_will_auth_time?
  end

  def not_over_limit_exp?
    return false if context.payload["exp"].blank?

    Time.zone.at(context.payload["exp"]) >= Time.zone.now
  end

  def not_will_iat?
    return false if context.payload["iat"].blank?

    Time.zone.at(context.payload["iat"]) <= Time.zone.now
  end

  def intended_aud?
    context.payload["aud"].present?
  end

  def intended_iss?
    return false if context.payload["iss"].blank?

    context.payload["iss"] == used_issuer_url
  end

  def str_sub?
    return false if context.payload["sub"].blank?

    context.payload["sub"].is_a? String
  end

  def not_will_auth_time?
    return false if context.payload["auth_time"].blank?

    Time.zone.at(context.payload["auth_time"]) <= Time.zone.now
  end

  def used_issuer_url
    ISSUER_BASE_URL + Global.firebase.project_id
  end
end
