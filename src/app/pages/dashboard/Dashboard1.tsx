import { useState } from "react";

interface IListItem {
  title: string;
  isSelected: boolean;
}

export const Dashboard = () => {
  const [lista, setLista] = useState<IListItem[]>([
    { title: "titulo1", isSelected: true },
    { title: "titulo2", isSelected: false },
  ]);

  const handleOnkeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    console.log("handleOnkeyDown", e.currentTarget.value);

    if (e.key === "Enter") {
      if (
        e.currentTarget.value !== null &&
        e.currentTarget.value.trim().length
      ) {
        const value = e.currentTarget.value;
        setLista((oldlist) => {
          if (oldlist.some((listItem) => listItem.title === value)) {
            return oldlist;
          }
          return [
            ...oldlist,
            {
              title: value,
              isSelected: false,
            },
          ];
        });
      }
      e.currentTarget.value = "";
    }
  };

  return (
    <div>
      <p>Lista</p>

      <input type="text" onKeyDown={handleOnkeyDown} />

      <p> {lista.filter((listItem) => listItem.isSelected).length} </p>

      <ul>
        {lista.map((listItem) => {
          return (
            <li key={listItem.title}>
              <input
                type="checkbox"
                checked={listItem.isSelected}
                onChange={() => {
                  setLista((oldlista) => {
                    return oldlista.map((oldlistItem) => {
                      const newIsSelected =
                        oldlistItem.title === listItem.title
                          ? !oldlistItem.isSelected
                          : oldlistItem.isSelected;
                      return {
                        ...oldlistItem,
                        isSelected: newIsSelected,
                      };
                    });
                  });
                }}
              />
              {listItem.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
