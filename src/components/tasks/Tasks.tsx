import { FC } from 'react';
import './tasks.scss';

export const Tasks: FC = () => {
  return (
    <div className="task-text">
      <p>
        Написать функцию sostavChisla(massivChisel: number[], chislo: number), которая бы находила
        все возможные комбинации чисел из massivChisel, сумма которых равна chislo. При этом:
        massivChisel содержит, только уникальные положительные числа (&gt; 0) 2- в комбинации не
        должно быть повторений чисел 3- все комбинации должны быть уникальными
      </p>
      <p>
        ` chislo: 15, massivChisel: [7, 8, 3, 4, 5, 6, 1, 2], result: [[1, 2, 3, 4, 5], [2, 3, 4,
        6], [1, 3, 5, 6], [4, 5, 6], [1, 3, 4, 7], [1, 2, 5, 7], [3, 5, 7], [2, 6, 7], [1, 2, 4, 8],
        [3, 4, 8], [2, 5, 8], [1, 6, 8], [7, 8]] `
      </p>
      <button>Посмотреть код</button>
    </div>
  );
};
