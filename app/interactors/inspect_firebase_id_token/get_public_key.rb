# frozen_string_literal: true

class InspectFirebaseIdToken::GetPublicKey
  include Interactor

  CLIENT_CERT_URL = "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com"

  def call
    conn = Faraday.new(url: CLIENT_CERT_URL)
    response = conn.get
    context.public_key = JSON.parse(response.body)[context.header["kid"]]
  end
end
