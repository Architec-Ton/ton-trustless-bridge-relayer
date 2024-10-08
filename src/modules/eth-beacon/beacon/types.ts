import { allForks } from "@lodestar/types";
import { ForkName } from "@lodestar/params";

import type { deneb } from '@lodestar/types';


export type TFinalityUpdate = {
  version: ForkName;
  data: deneb.LightClientFinalityUpdate
};

export type TOptimisticUpdate = {
  version: ForkName;
  data: deneb.LightClientOptimisticUpdate
};

export type TLightClientUpdate = {
  version: ForkName;
  data: deneb.LightClientUpdate;
};

export type TAllForksBlock = {
  version: ForkName;
  data: allForks.SignedBeaconBlock;
};

export type TDenebBlock = {
  version: ForkName;
  data: deneb.SignedBeaconBlock;
};

