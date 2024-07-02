import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.name,
          email: user.email,
          password: user.password,
        }),
      }).catch((error) =>
        console.error(
          "Erreur lors de l'enregistrement de l'utilisateur:",
          error
        )
      );
    }
  }, [isAuthenticated, user]);

  return (
    <header className="">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-4 lg:py-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            {isAuthenticated ? user.name : "Your Name"}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-5">
          <a href="#" className="text-sm font-semibold leading-6">
            Blog
          </a>
          <a href="#" className="text-sm font-semibold leading-6">
            Projects
          </a>
          <a href="#" className="text-sm font-semibold leading-6">
            About
          </a>
          <a href="#" className="text-sm font-semibold leading-6">
            Newsletter
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:ml-5">
          {isAuthenticated ? (
            <a
              href="#"
              className="text-sm font-semibold leading-6"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log out <span aria-hidden="true">&rarr;</span>
            </a>
          ) : (
            <a
              href="#"
              className="text-sm font-semibold leading-6"
              onClick={() => loginWithRedirect()}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-dark text-white p-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              {isAuthenticated ? user.name : "Your Name"}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                >
                  About
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                >
                  Newsletter
                </a>
              </div>
              <div className="py-6">
                {isAuthenticated ? (
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Log out
                  </a>
                ) : (
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7"
                    onClick={() => loginWithRedirect()}
                  >
                    Log in
                  </a>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
