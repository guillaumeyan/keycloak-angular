/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */
import { TestBed, inject } from '@angular/core/testing';

import { KeycloakBearerInterceptor } from './keycloak-bearer.interceptor';

describe('KeycloakBearerInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeycloakBearerInterceptor]
    });
  });

  it(
    'should be created',
    inject([KeycloakBearerInterceptor], (service: KeycloakBearerInterceptor) => {
      expect(service).toBeTruthy();
    })
  );
});
