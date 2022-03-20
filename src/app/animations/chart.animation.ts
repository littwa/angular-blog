
import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export function chartAnimation(name: string): AnimationTriggerMetadata {
    return trigger(name, [
        transition(':enter', [
            style({ height: 0 }),
            animate('400ms ease-in-out', style({ height: '*' })),
        ]),
        transition(':leave', [
            animate('400ms ease-in-out', style({ height: 0 }))
        ])
    ]);
}
