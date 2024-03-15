import { Injectable, Type } from '@angular/core';
import { Mission1 } from "../components/assignments/mission1/mission1.component";

export interface Mission {
    id: number,
    active: boolean,
    complete: boolean,
}

@Injectable({
    providedIn: 'root',
})
export class MissionService {

    getMissions() {
        return [
            {
                component: Mission1,
                inputs: {active: true, success: false}
            }
            
        ] as {component: Type<any>, inputs: Record<string, unknown>}[]
    }
}