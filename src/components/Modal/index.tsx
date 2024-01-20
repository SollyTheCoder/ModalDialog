import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";

export type ModalProps = {
  title: string;
  content: ReactNode;
  buttons: string[];
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
        <div className=" rounded-lg z-10 w-96 max-h-96 px-10 py-5 bg-white">
          <div className="flex w-full justify-end">
            <button onClick={closeModal}>
              <p>X</p>
            </button>
          </div>
          <p>{title}</p>
          <p>yoyoyoyo</p>
        </div>
      </div>
    </>,

    document.body
  );
}
