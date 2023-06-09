import "reflect-metadata";

import { DeleteAgentByIdUseCase } from "./DeleteAgentByIdUseCase";
import { InMemoryAgentRepository } from "../../repositories/in-memory/InMemoryUsersRepository";
import { AgentDontExist } from "./DeleteAgentByIdError";
import { mockUser } from "@helpers/test.helper";

let agentRepository: InMemoryAgentRepository;
let deleteAgentByIdUseCase: DeleteAgentByIdUseCase;

describe("UseCase -> Delete Agent By Id", () => {
  beforeEach(() => {
    agentRepository = new InMemoryAgentRepository();
    deleteAgentByIdUseCase = new DeleteAgentByIdUseCase(agentRepository);
  });

  it("should create delete agent", async () => {
    const createdAgent = await agentRepository.create(mockUser);
    const response = await deleteAgentByIdUseCase.execute(createdAgent.id);

    expect(response).toBe("Ok");
  });

  it("should throw error when agent is not found", async () => {
    expect(async () => {
      await deleteAgentByIdUseCase.execute("mock");
    }).rejects.toBeInstanceOf(AgentDontExist);
  });
});
