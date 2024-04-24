import type { RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleLoginModal, setSessionData } from "@/store/slices/loginSlice";

import {
  LoginModal as LoginModalUI,
  LoginModalBody,
  LoginModalFooter,
  LoginModalHeader,
} from "@cencommerce/paris-uikit";

export default function LoginModal() {
  const { sessionData, modalState } = useAppSelector(
    (state: RootState) => state.login
  );

  const dispatch = useAppDispatch();

  return (
    <>
      <LoginModalUI
        isOpen={modalState.isOpen}
        backgroundImageUrl="https://paris-ui-kit.ecomm-stg.cencosud.com/girls.png"
      >
        <LoginModalHeader
          onClose={() => {
            dispatch(toggleLoginModal(false));
          }}
          title="Heading"
        />
        <LoginModalBody>
          <div className="ui-flex ui-h-full ui-items-center ui-justify-center">
            <p>Content</p>
          </div>
        </LoginModalBody>
        <LoginModalFooter
          ctaComponent={{
            label: "¿No tienes cuenta?",
            link: {
              onClick: function noRefCheck() {},
              text: "Crear cuenta",
            },
          }}
          primaryButton={{
            label: "Botón",
            onClick: () => {
              dispatch(
                setSessionData({
                  ...sessionData,
                  isLoggedIn: true,
                })
              );
              dispatch(toggleLoginModal(false));
            },
          }}
        />
      </LoginModalUI>
    </>
  );
}
