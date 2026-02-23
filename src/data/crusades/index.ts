import type { CrusadeDetail } from '../crusade-detail.types';

import { typeCrusade } from './type.data';
import { gitCrusade } from './git.data';
import { secretCrusade } from './secret.data';
import { archCrusade } from './arch.data';
import { depCrusade } from './dep.data';
import { testCrusade } from './test.data';
import { deadCrusade } from './dead.data';
import { namingCrusade } from './naming.data';
import { sizeCrusade } from './size.data';
import { observabilityCrusade } from './observability.data';
import { reactCrusade } from './react.data';
import { a11yCrusade } from './a11y.data';
import { copyCrusade } from './copy.data';
import { adaptiveCrusade } from './adaptive.data';
import { composeCrusade } from './compose.data';

export const crusadeDetails: Record<string, CrusadeDetail> = {
  type: typeCrusade,
  git: gitCrusade,
  secret: secretCrusade,
  arch: archCrusade,
  dep: depCrusade,
  test: testCrusade,
  dead: deadCrusade,
  naming: namingCrusade,
  size: sizeCrusade,
  observability: observabilityCrusade,
  react: reactCrusade,
  a11y: a11yCrusade,
  copy: copyCrusade,
  adaptive: adaptiveCrusade,
  compose: composeCrusade,
};
