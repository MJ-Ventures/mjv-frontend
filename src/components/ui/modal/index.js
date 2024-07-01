import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";

export default function Modal({
  children,
  bgClassName = "",
  className = "",
  open,
  setOpen,
  setActiveTabItem = () => {},
  disableBackdrop = false,
}) {
  function closeModal() {
    setOpen(false);
    setActiveTabItem("Upload");
  }

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        {!disableBackdrop && (
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={`fixed inset-0 bg-black bg-opacity-70 ${bgClassName}`}
            />
          </TransitionChild>
        )}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className={className}>
                <div className="relative w-full flex justify-end lg:pb-3 pb-4">
                  <div className="flex items-center">
                    <button
                      className="inline-flex items-center px-3 border leading-4 font-medium rounded-md focus:outline-none focus:ring-0 h-[42px] sm:h-[38px] text-sm text-gray-800  border-transparent -my-2 -mr-2"
                      onClick={() => setOpen(false)}
                    >
                      <span className="max-w-full overflow-hidden">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="text-gray-400 rounded-md h-7 w-7 :text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
