import { TodoI } from '../types/todo';

export class Todo implements TodoI {
    id: number;
    checked: boolean;
    title: string;

    constructor(title: string, checked = false) {
        this.id = Date.now();
        this.title = title;
        this.checked = checked;
    }
}