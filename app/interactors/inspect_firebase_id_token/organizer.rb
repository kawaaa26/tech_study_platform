class InspectFirebaseIdToken::Organizer
  include Interactor::Organizer

  organize InspectFirebaseIdToken::DecodeIdToken,
           InspectFirebaseIdToken::InspectPayload,
           InspectFirebaseIdToken::GetPublicKey,
           InspectFirebaseIdToken::InspectSignature
end
