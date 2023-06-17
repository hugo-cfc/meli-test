interface BottomSheetProps {
  name: string;
  children: React.ReactNode;
  params?: {
    "modal-type": string;
  };
}

const BottomSheet = ({ name, children, params }: BottomSheetProps) => {
  const modalType = params?.["modal-type"];

  return (
    <div
      className={`fixed z-50 left-0 w-screen h-screen bg-white transition-all ${
        modalType === name
          ? "animate-bottomModal top-0 "
          : "animate-bottomModalOut top-[101%]"
      } tablet:hidden`}
    >
      {children}
    </div>
  );
};

export default BottomSheet;
