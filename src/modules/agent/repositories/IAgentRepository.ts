import { Agent } from "../entities/Agent";
import { IAgent } from "../entities/IAgent";
import { ICreateAgentDTO } from "../useCases/createAgent/ICreateAgentDTO";
import { IUpdateAgentDTO } from "../useCases/updateAgent/IUpdateAgentDTO";

export interface IAgentRepository {
  create: (data: ICreateAgentDTO) => Promise<IAgent>;
  update: (
    agent_id: string,
    data: IUpdateAgentDTO,
    select?: string
  ) => Promise<IAgent>;
  findById: (agent_id: string, select?: string) => Promise<IAgent | undefined>;
  findByLogin: (login: string, select?: string) => Promise<IAgent | undefined>;
  findAll: (select?: string) => Promise<IAgent[]>;
  deleteById: (agent_id: string) => Promise<string>;
  deleteByLogin: (login: string) => Promise<string>;
}
