import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface ITarefa {
  id: number;
  title: string;
  isCompleted: boolean;
}
//
const getAll = async (): Promise<ITarefa[] | ApiException> => {
  try {
    const { data } = await Api().get("/tarefas");
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar a API.");
  }
};
//
const getById = async (id: number): Promise<ITarefa | ApiException> => {
  try {
    const { data } = await Api().get(`/tarefas/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar a API.");
  }
};
//
const creaet = async (
  body: Omit<ITarefa, "id">
): Promise<ITarefa | ApiException> => {
  try {
    const { data } = await Api().post("/tarefas", body);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao tentar criar registro.");
  }
};
//
const updateById = async (
  body: ITarefa
): Promise<ITarefa | ApiException> => {
  try {
    const { data } = await Api().put(`/tarefas/${body.id}`, body);
    return data;
  } catch (error: any) {
    return new ApiException(
      error.message || "Erro ao tentar alterar registro."
    );
  }
};
//
const deleteById = async (id: number): Promise<undefined | ApiException> => {
  try {
    const { data } = await Api().delete(`/tarefas/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(
      error.message || "Erro ao tentar excluir registro."
    );
  }
};
//
export const TarefasServices = {
  getAll,
  getById,
  creaet,
  updateById,
  deleteById,
};
