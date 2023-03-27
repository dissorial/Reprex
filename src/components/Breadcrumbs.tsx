import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  navigation: { name: string; href: string; current: boolean }[];
}

export default function Breadcrumbs({ navigation }: Props) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4  flex-wrap">
        <li>
          <div>
            <Link to="/" className="text-gray-200 hover:text-gray-300">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {navigation.map((page) => (
          <li key={page.name} className="">
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-200"
                aria-hidden="true"
              />
              <Link
                to={page.href}
                className="ml-4 text-md font-medium text-gray-200 hover:text-gray-300"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
