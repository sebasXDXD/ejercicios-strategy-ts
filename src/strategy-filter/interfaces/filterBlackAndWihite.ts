import { FilterStrategy } from "./filter-image.strategy";

export interface FilterBlackAndWhite extends FilterStrategy{    
      colorBlack : string;
      colorWhite :string;  
}