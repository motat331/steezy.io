import { Injectable, isDevMode } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class IsSecureGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (window.location.href.includes('steezysite')) {
            location.href = 'https://steezapp.com';
            return false;
        } else if (!isDevMode() && location.protocol !== 'https:') {
            location.href =
                'https:' +
                window.location.href.substring(window.location.protocol.length);
            return false;
        }
        return true;
    }
}
