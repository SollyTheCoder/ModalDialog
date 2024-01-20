import { ReactNode } from "react";
import { createPortal } from "react-dom";

export type ModalContent = {
  title: string;
  content: ReactNode;
  buttons: { name: string; callback: () => void }[];
};

export type ModalProps = ModalContent & {
  closeModal: () => void;
};

export default function Modal({
  title,
  content,
  buttons,
  closeModal,
}: ModalProps) {
  return createPortal(
    <>
      <div className="opacity-50 fixed w-full h-full top-0 start-0 bg-slate-100" />
      <div className="fixed w-full flex h-full items-center align-middle justify-center text-center top-0 start-0">
        <div className=" rounded-lg z-10 w-96 max-h-96 px-10 py-5 bg-white overflow-scroll">
          <div id="modal-header" className="flex w-full justify-between">
            <p />
            <p className="w-auto text-2xl">{title}</p>
            <button onClick={closeModal}>
              <p>X</p>
            </button>
          </div>
          <div id="modal-content">{content}</div>
          <div id="modal-footer" className="flex flex-wrap justify-evenly">
            {buttons.map((buttonProps, i) => (
              <button
                className="bg-fuchsia-300 p-2 rounded-md mt-5"
                key={`modal-button-${i}`}
                onClick={buttonProps.callback}
              >
                <p>{buttonProps.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
