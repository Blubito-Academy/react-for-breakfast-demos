class Observable {
  observers: { (dataToDisplay: string): void }[];

  constructor() {
    this.observers = [];
  }

  public subscribe(newObserver: { (dataToDisplay: string): void }) {
    this.observers.push(newObserver);
  }

  public unsubscribe(observerToRemove: { (dataToDisplay: string): void }) {
    const updatedObservers = this.observers.filter(
      (observer) => observer !== observerToRemove
    );
    this.observers = updatedObservers;
  }

  public notifyObservers(dataToDisplay: string) {
    this.observers.forEach((observer) => observer(dataToDisplay));
  }
}

export const observableObject = new Observable();
