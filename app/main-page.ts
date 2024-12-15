import { EventData, Page } from '@nativescript/core';
import { AlankarViewModel } from './view-models/alankar-view-model';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new AlankarViewModel();
}