// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Replace host in "apiHost" with the External-IP of the "ducta11-kubernetes-udagram-public-reverseproxy-svc" service after expose with LoadBalancer
export const environment = {
  production: false,
  appName: 'Udagram',
  apiHost: 'http://localhost:8200/api/v0'
  //apiHost: 'http://aa56a16323e404ab7b43d71350c17893-32178222.us-east-2.elb.amazonaws.com:8200/api/v0'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
