import { batch, computed, effect, signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";

export function createDomSignal<T>(defaultValue?: T) {
  return signal(defaultValue);
}

export function createComputedSignal<T>(defaultValue: () => T) {
  return computed(defaultValue);
}

export function signalEffect(fn: () => void) {
  effect(fn);
}

export function batchUpdate(fn: () => void) {
  batch(fn);
}

export { useSignals };
