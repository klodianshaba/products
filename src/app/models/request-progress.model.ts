import {BehaviorSubject} from "rxjs";

export interface RequestProgressInterface {
  upload: BehaviorSubject<number>;
  download: BehaviorSubject<number>;
}
