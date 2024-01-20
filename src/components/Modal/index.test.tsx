import { fireEvent, render, screen } from "@testing-library/react";
import Modal, { ModalContent } from ".";

describe("<Modal />", () => {
  const closeModalFunc = jest.fn();
  const anyFunc = jest.fn();
  const validModalInfo: ModalContent = {
    title: "Modal Title 1",
    content: <p>Modal Content 1</p>,
    buttons: [
      { name: "Modal Button 0", callback: () => anyFunc(0) },
      { name: "Modal Button 1", callback: () => anyFunc(1) },
    ],
  };

  function renderValidModal() {
    render(
      <Modal
        title={validModalInfo.title}
        content={validModalInfo.content}
        buttons={validModalInfo.buttons}
        closeModal={closeModalFunc}
      />
    );
  }

  describe("Elements are visible", () => {
    test("Renders component with close button", () => {
      renderValidModal();
      expect(screen.getByTestId("modal-close-button")).toBeInTheDocument();
    });
    test("Renders component with title", () => {
      renderValidModal();
      expect(screen.getByText("Modal Title 1")).toBeInTheDocument();
      expect(screen.queryByText("Modal Title 2")).toBeFalsy();
    });
    test("Renders component with content", () => {
      renderValidModal();
      expect(screen.getByText("Modal Content 1")).toBeInTheDocument();
      expect(screen.queryByText("Modal Content 2")).toBeFalsy();
    });
    test("Renders component with buttons", () => {
      renderValidModal();
      expect(screen.getByText("Modal Button 1")).toBeInTheDocument();
      expect(screen.queryByText("Modal Button 2")).toBeFalsy();
    });
    test("Renders component with background", () => {
      renderValidModal();
      expect(screen.getByTestId("modal-background")).toBeInTheDocument();
    });
  });

  describe("Close button is functional", () => {
    test("Calls close function", () => {
      renderValidModal();
      const closeButton = screen.getByTestId("modal-close-button");
      fireEvent.click(closeButton);

      expect(closeModalFunc).toHaveBeenCalledTimes(1);
    });
  });

  describe("Bottom buttons are functional", () => {
    test("Calls function when clicked", () => {
      renderValidModal();
      const bottomButton0 = screen.getByTestId("modal-bottom-button-0");
      fireEvent.click(bottomButton0);
      expect(anyFunc).toHaveBeenCalledWith(0);

      const bottomButton1 = screen.getByTestId("modal-bottom-button-1");
      fireEvent.click(bottomButton1);
      expect(anyFunc).toHaveBeenCalledWith(1);
    });
  });
});
