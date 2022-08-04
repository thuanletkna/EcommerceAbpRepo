import { differentLocales } from '@abp/ng.core';
import { en_US, vi_VN } from 'ng-zorro-antd/i18n';
import { enUS, vi } from 'date-fns/locale';
import { LocalizationService } from '@abp/ng.core';

export function registerLocale(locale: string) {
  return import(
    /* webpackChunkName: "_locale-[request]"*/
    /* webpackInclude: /[/\\](en|vi).mjs/ */
    /* webpackExclude: /[/\\]global|extra/ */
    `/node_modules/@angular/common/locales/${differentLocales[locale] || locale}.mjs`
  );
}

export function nzRegisterLocale(local: any) {
  const localizationService = local.localizationService as LocalizationService;
  return getNzLocale(localizationService.currentLang);
}

export function dateFnsRegisterLocale(local: any) {
  const localizationService = local.localizationService as LocalizationService;
  return getDateFnsLocale(localizationService.currentLang);
}

export function getNzLocale(currentLang: string) {
  switch (currentLang) {
    case 'en':
      return en_US;
    case 'vi':
      return vi_VN;
    default:
      return en_US;
  }
}


export function getDateFnsLocale(currentLang: string) {
  switch (currentLang) {
    case 'en':
      return enUS;
    case 'vi':
      return vi;
    default:
      return enUS;
  }
} 