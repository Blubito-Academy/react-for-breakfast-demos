# Observer pattern

## 1. Definition

The Observer pattern is a behavioral design pattern that lets other objects (called **observers**) subscribe to another object (called **observable**).

The pattern provides a mechanism to notify the observers of any updates happening to the observable. It is important for the interface to be standartized because the pattern provides a way to subscribe or unsubscribe from the observable during run-time. Naturally, interfaces for subscription and unsubscription are also offered. This is needed to prevent tight coupling between observable and observers.

In its most condensed form the Observer pattern goes through the following steps (provided we already have subscribers):

A state change occurrs inside the observable. The observable then goes through the list of subscirbes and triggers the notification method. -> The observers receive the event (and potential contextual information) and in turn execute some business logic related to the received event.

## 2. Similarities to Publisher-Subscriber pattern

Another pattern that is often used interchangably is the Publisher-Subscriber one. It is very similar to the Observer pattern, however the interaction between publishers and subscribers is not direct - it is established through another object (a **broker**), acting as a middle-man. This pattern can be consdiered a mix between the Observer and Mediator patterns. The broker can be configured to retain the data for a certain period of time. Unlike the observable, the publisher is not aware of its subscribers.

## 3. Usages

As we can already derive from this, the perfect use case for this pattern is when we need to react to a specific state change.

One library that utilizes this pattern, which has already been discussed, is MobX - a state-management library. While MobX is not React dependant, its commonly used to provided state-management for React projects. MobXprovides the higher order component **observer**, which makes the wrapped React component a reactive one - any state changes in our MobX store, to which our component is subscirbed, will cause the relevant rerenders and computations in the component itself.

Another library that utilizes this pattern is RxJS. RxJS enables us to subscribe to certain events. The provided example in patterns.dev (link bellow) "subscribes" to the mousedown and mousemove events, and tracks if the user is executing a dragging event.

## 4. Demo

The demo is a scaffolded Vite React project. Run the following to get started.

```zsh
  npm install
  npm run dev
```

## 5. Sources

- [Refactoring Guru - Observer pattern](https://refactoring.guru/design-patterns/observer)
- [patterns.dev - Observer pattern](https://www.patterns.dev/vanilla/observer-pattern)
- [MobX - Getting started](https://mobx.js.org/getting-started)
- [David Dieruf - Observer versus Pub-Sub design patterns](https://medium.com/building-the-open-data-stack/observer-versus-pub-sub-design-patterns-48b1dbc83916)
