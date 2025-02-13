// This deprecated imported variable won't trigger the rule at lines 10 and 36,
// both in CLI (npx eslint) and VSCode (hover & quickfix)
import { deprecatedModuleVar } from './util';

/** @deprecated For some reason; Usually would be an Angular injection token */
const deprecatedVar = 'anything';

export class TestClass {
  nok(): void {
    const test = {
      someField: deprecatedModuleVar,
    };
    console.log(test);
  }

  okWithLocalDefinitionAndObjectFieldDefinitionUsage(): void {
    const test = {
      someField: deprecatedVar,
    };
    console.log(test);
  }

  okWithIntermediateVariable(): void {
    const intermediate = deprecatedModuleVar;
    const test = {
      someField: intermediate,
    };
    console.log(test);
  }
}

// ----- Same, as functions ----- //

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const nok = (): void => {
  const test = {
    someField: deprecatedModuleVar,
  };
  console.log(test);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const okWithLocalDefinitionAndObjectFieldDefinitionUsage = (): void => {
  const test = {
    someField: deprecatedVar,
  };
  console.log(test);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const okWithIntermediateVariable = (): void => {
  const intermediate = deprecatedModuleVar;
  const test = {
    someField: intermediate,
  };
  console.log(test);
};
