import { useCallback, useEffect, useState } from "react";
import { ITarefa, TarefasServices } from "../../shared/services";
import { ApiException } from "../../shared/services/api/ApiException";

import "./Dashboard.css";

export const Dashboard = () => {
  const [lista, setLista] = useState<ITarefa[]>([]);

  useEffect(() => {
    TarefasServices.getAll()
      // .then((resp) => resp.json())
      .then((resp) => {
        if (resp instanceof ApiException) {
          alert(resp.message);
        } else {
          setLista(resp);
        }
      });
  }, []);

  const handleOnkeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        console.log("handleOnkeyDown", e.currentTarget.value);

        if (e.key === "Enter") {
          if (
            e.currentTarget.value !== null &&
            e.currentTarget.value.trim().length
          ) {
            const value = e.currentTarget.value;

            if (lista.some((listItem) => listItem.title === value)) return;

            TarefasServices.creaet({
              title: value,
              isCompleted: false,
            }).then((resp) => {
              if (resp instanceof ApiException) {
                alert(resp.message);
              } else {
                setLista((oldlist) => {
                  return [...oldlist, resp];
                });
              }
            });
          }
          e.currentTarget.value = "";
        }
      },
      [lista]
    );

  const handleOnChange = useCallback(
    (id: number) => {
      console.log("handleOnChange", id);
      const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id);
      if (!tarefaToUpdate) return;

      TarefasServices.updateById({
        ...tarefaToUpdate,
        isCompleted: !tarefaToUpdate.isCompleted,
      }).then((resp) => {
        if (resp instanceof ApiException) {
          alert(resp.message);
        } else {
          setLista((oldlista) => {
            return oldlista.map((oldlistItem) => {
              if (oldlistItem.id === id) return resp;
              return oldlistItem;
            });
          });
        }
      });
    },
    [lista]
  );

  const handleDelete = useCallback((id: number) => {
    TarefasServices.deleteById(id).then((resp) => {
      if (resp instanceof ApiException) {
        alert(resp.message);
      } else {
        setLista((oldlista) => {
          return oldlista.filter((oldlistItem) => oldlistItem.id !== id);
        });
      }
    });
  }, []);

  return (
    <div>
      <p>Lista</p>

      <input type="text" onKeyDown={handleOnkeyDown} />

      <p> {lista.filter((listItem) => listItem.isCompleted).length} </p>

      <ul>
        {lista.map((listItem) => {
          return (
            <li key={listItem.id}>
              <input
                type="checkbox"
                checked={listItem.isCompleted}
                onChange={() => handleOnChange(listItem.id)}
              />
              <p>{listItem.title}</p>

              <button onClick={() => handleDelete(listItem.id)}>
                Excluir {listItem.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
