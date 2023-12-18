import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  now = [
    'hand',
    'Bike',
    'Weight Loss',
    'Pick',
    'Go home',
    'sleep forever'
  ];

  future = [
    'Job',
    'Car',
    'Responsibility',
    'Taka',
    'status',
  ];

  extra = [
    'Best Job',
    'Money',
    'Office',
    'Task to do',
    'Something',
  ];

  again = [
    'eat',
    'sleep',
    'repeat',
    'go',
  ]

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
