"use client";
import { faker } from "@faker-js/faker";
import { ArrowDown, CaseLower } from "lucide-react";
import { useState } from "react";

let people = faker.datatype.array(20).map(() => {
  let firstName = faker.person.firstName();
  let lastName = faker.person.lastName();
  let name = `${firstName} ${lastName}`;
  let email = faker.internet.email({firstName,lastName}).toLowerCase();
  return {
    name,
    title: faker.person.jobTitle(),
    email,
    role: faker.person.jobType(),
  };
});

const UserPage = () => {
  const [sort, setSort] = useState("");
  const [acceding, descending] = sort?.split(":") ?? [];
  const sortedPeople = [...people]?.sort((a: any, b: any) => {
    return descending
      ? b[acceding]?.localeCompare(a[acceding])
      : a[acceding]?.localeCompare(b[acceding]);
  });

  console.log({ acceding, descending });
  return (
    <div className="flex flex-col mt-9">
      <div className="-mx-4 -my-2 overflow-x-auto sm:mx-6 lg:mx-8">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <SortableComponent
                  prop="name"
                  sort={sort}
                  onClick={(sort) => setSort(sort)}
                >
                  Name
                </SortableComponent>
                <SortableComponent
                  prop="title"
                  sort={sort}
                  onClick={(sort) => setSort(sort)}
                >
                  Title
                </SortableComponent>
                <SortableComponent
                  prop="email"
                  sort={sort}
                  onClick={(sort) => setSort(sort)}
                >
                  Email
                </SortableComponent>
                <SortableComponent
                  prop="role"
                  sort={sort}
                  onClick={(sort) => setSort(sort)}
                >
                  Role
                </SortableComponent>
              </tr>
            </thead>
            <tbody className=" bg-white-- divide-y divide-gray-300">
              {sortedPeople.map((person) => {
                return (
                  <tr key={person.email} className="bg-white">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {person.name}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.title}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.email}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.role}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
type SortableComponentProps = {
  prop: string;
  sort: string;
  onClick: (sort: string) => void;
  children: React.ReactNode;
};
const SortableComponent: React.FC<SortableComponentProps> = ({
  prop,
  sort,
  onClick,
  children,
}) => {
  const [acceding, descending] = sort?.split(":") ?? [];

  let sortElement: string | null;
  if (acceding !== prop) {
    sortElement = prop;
  } else if (sort === prop) {
    sortElement = `${prop}:desc`;
  } else {
    sortElement = null;
  }
  return (
    <th
      className="py-3.5 px-3 first:pl-4  text-left text-sm text-gray-900 first:sm:pl-5"
      scope="col"
    >
      <button
        className="flex items-center "
        onClick={() => onClick(sortElement!)}
      >
        {children}
        <span
          className={`${
            acceding === prop
              ? "text-gray-900 group-hover:bg-gray-400"
              : "invisible text-gray-400 group-hover:visible "
          } flex-none ml-2 rounded`}
        >
          <ArrowDown className={`${descending ? "-rotate-180" : ""}`} size={16} />
        </span>{" "}
      </button>
    </th>
  );
};
export default UserPage;
