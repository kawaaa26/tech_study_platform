# frozen_string_literal: true

class InspectFirebaseIdToken::DecodeIdToken
  include Interactor

  def call
    decode_token = JWT.decode(context.token, nil, false, {})
    if decode_token[1]["alg"] == "RS256"
      context.payload = decode_token[0]
      context.header = decode_token[1]
    else
      context.fail!(error: "Not expect alg!")
    end
  end
end
