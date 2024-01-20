import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ModalLauncher from "./components/ModalLauncher";
import Modal, { ModalProps } from "./components/Modal";
import { createPortal } from "react-dom";

function App() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalProps, setModalProps] = useState<ModalProps>({
    title: "Test",
    content: <></>,
    buttons: [],
    closeModal: onModalClose,
  });

  function onModalLauncherClick() {
    // setModalProps((oldModalProps) => {
    //   return { ...oldModalProps};
    // });
    setModalVisible(true);
  }

  function onModalClose() {
    console.log("onModalClose");
    setModalVisible(false);
  }

  return (
    <>
      <div className="mx-auto text-center min-h-screen py-10 px-40 bg-zinc-300">
        <div className="mx-auto my-10 w-full text-center">
          <h1 className="text-5xl font-thin">Welcome to Dialog Modal</h1>
          <p className="font-extralight">
            Dialog modal is used for presenting users with custom modals
            containing valuable information - modal visible
            {modalVisible.toString()}
          </p>
        </div>
        <div className="text-left flex flex-wrap justify-around">
          <ModalLauncher
            colour={"red"}
            title={"Simple Modal"}
            onClickEvent={() => onModalLauncherClick()}
          />
          <ModalLauncher
            colour={"amber"}
            title={"Dismiss Modal"}
            onClickEvent={() => onModalLauncherClick()}
          />
          <ModalLauncher
            colour={"lime"}
            title={"Content Modal"}
            onClickEvent={() => onModalLauncherClick()}
          />
          <ModalLauncher
            colour={"cyan"}
            title={"Fun Modal"}
            onClickEvent={() => onModalLauncherClick()}
          />
        </div>
      </div>
      {modalVisible && (
        <Modal
          title={modalProps.title}
          content={modalProps.content}
          buttons={[]}
          closeModal={() => onModalClose()}
        />
      )}
    </>
  );
}

export default App;
