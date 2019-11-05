# frozen_string_literal: true

class InspectFirebaseIdToken::InspectSignature
  include Interactor

  def call
    certificate = OpenSSL::X509::Certificate.new(context.public_key)
    decode_token = JWT.decode(context.token, certificate.public_key, true, algorithm: "RS256", verify_iat: true)
    context.email = decode_token[0]["email"]
    context.uid = decode_token[0]["sub"]
  end
end
