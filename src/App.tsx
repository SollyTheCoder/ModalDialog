import { useEffect, useState } from "react";
import "./App.css";
import Modal, { ModalContent } from "./components/Modal";
import ModalLauncher from "./components/ModalLauncher";
import {
  articleModalContent,
  dismissModalContent,
  everythingModalContent,
  simpleModalContent,
} from "./constants/modalContent";

function App() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ModalContent>({
    title: "",
    content: <></>,
    buttons: [],
  });

  function onModalLaunch(modalContent: ModalContent) {
    setModalContent(modalContent);
    setModalVisible(true);
  }

  function onModalClose() {
    setModalVisible(false);
  }

  useEffect(() => {
    onModalLaunch({
      title: "App Launch",
      content: <p>Application has been successfully launched</p>,
      buttons: [],
    });
  }, []);

  return (
    <>
      <div className="mx-auto text-center min-h-screen py-10 px-40 bg-zinc-300">
        <div className="mx-auto my-10 w-full text-center">
          <h1 className="text-5xl font-thin">Welcome to Dialog Modal</h1>
          <p className="font-extralight">
            Dialog modal is used for presenting users with custom modals
            containing valuable information - modal visible:
            {modalVisible.toString()}
          </p>
        </div>
        <div className="text-left flex flex-wrap justify-around">
          <ModalLauncher
            colour={"red"}
            title={"Simple Modal"}
            onClickEvent={() =>
              onModalLaunch({
                title: "Simple Modal",
                content: simpleModalContent,
                buttons: [],
              })
            }
          />
          <ModalLauncher
            colour={"amber"}
            title={"Dismiss Modal"}
            onClickEvent={() =>
              onModalLaunch({
                title: "Dismiss Modal",
                content: dismissModalContent,
                buttons: [{ name: "dismiss", callback: onModalClose }],
              })
            }
          />
          <ModalLauncher
            colour={"lime"}
            title={"Article Modal"}
            onClickEvent={() =>
              onModalLaunch({
                title: "Article Modal",
                content: articleModalContent,
                buttons: [],
              })
            }
          />
          <ModalLauncher
            colour={"cyan"}
            title={"Everything Modal"}
            onClickEvent={() =>
              onModalLaunch({
                title: "Everything Modal",
                content: everythingModalContent,
                buttons: [
                  { name: "dismiss", callback: onModalClose },
                  {
                    name: "Add Button",
                    callback: () => {
                      setModalContent((prev) => {
                        return {
                          ...prev,
                          buttons: [
                            ...prev.buttons,
                            { name: "New Button", callback: () => {} },
                          ],
                        };
                      });
                    },
                  },
                ],
              })
            }
          />
        </div>
      </div>
      {modalVisible && (
        <Modal
          title={modalContent.title}
          content={modalContent.content}
          buttons={modalContent.buttons}
          closeModal={() => onModalClose()}
        />
      )}
    </>
  );
}

export default App;
