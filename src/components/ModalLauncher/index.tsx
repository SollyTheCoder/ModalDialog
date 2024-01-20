type ModalLauncherProps = {
  colour: "red" | "orange" | "amber" | "lime" | "cyan" | "indigo";
  title: string;
  onClickEvent: () => void;
};

export default function ModalLauncher({
  colour,
  title,
  onClickEvent,
}: ModalLauncherProps) {
  const colorVariants = {
    red: "mx-auto w-52 h-52 bg-red-500 my-3 rounded-lg",
    orange: "mx-auto w-52 h-52 bg-orange-500 my-3 rounded-lg",
    amber: "mx-auto w-52 h-52 bg-amber-500 my-3 rounded-lg",
    lime: "mx-auto w-52 h-52 bg-lime-500 my-3 rounded-lg",
    cyan: "mx-auto w-52 h-52 bg-cyan-500 my-3 rounded-lg",
    indigo: "mx-auto w-52 h-52 bg-indigo-500 my-3 rounded-lg",
  };

  return (
    <button
      className={colorVariants[colour]}
      onClick={onClickEvent}
      data-hs-overlay="#hs-basic-modal"
    >
      <p className="text-2xl">{title}</p>
    </button>
  );
}
