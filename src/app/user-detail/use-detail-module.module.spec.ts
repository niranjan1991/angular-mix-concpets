import { UseDetailModuleModule } from './use-detail-module.module';

describe('UseDetailModuleModule', () => {
  let useDetailModuleModule: UseDetailModuleModule;

  beforeEach(() => {
    useDetailModuleModule = new UseDetailModuleModule();
  });

  it('should create an instance', () => {
    expect(useDetailModuleModule).toBeTruthy();
  });
});
