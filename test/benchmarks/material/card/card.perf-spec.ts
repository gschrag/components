/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {$, browser} from 'protractor';
import {runBenchmark} from '@angular/dev-infra-private/benchmark/driver-utilities';

describe('card performance benchmarks', () => {
  beforeAll(() => {
    browser.rootEl = '#root';
  });

  it('renders a simple card', async() => {
    await runBenchmark({
      id: 'card-render',
      url: '',
      ignoreBrowserSynchronization: true,
      params: [],
      prepare: async () => await $('#hide').click(),
      work: async () => await $('#show').click()
    });
  });
});
