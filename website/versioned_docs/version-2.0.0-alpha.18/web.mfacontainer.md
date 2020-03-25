---
id: version-2.0.0-alpha.18-web.mfacontainer
title: MFAContainer class
hide_title: true
original_id: web.mfacontainer
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->


## MFAContainer class

Skygear Auth Multi-Factor-Authentication APIs.

<b>Signature:</b>

```typescript
export declare class MFAContainer<T extends BaseAPIClient> 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(parent)](./web.mfacontainer._constructor_.md) |  | Constructs a new instance of the <code>MFAContainer</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [parent](./web.mfacontainer.parent.md) |  | <code>AuthContainer&lt;T&gt;</code> |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [activateOOB(code)](./web.mfacontainer.activateoob.md) |  | Activates out-of-band (OOB) MFA authenticator. |
|  [activateTOTP(otp)](./web.mfacontainer.activatetotp.md) |  | Activates time-based one time password (TOTP) MFA authenticator. |
|  [authenticateWithOOB(options)](./web.mfacontainer.authenticatewithoob.md) |  | Performs MFA using out-of-band (OOB) MFA authenticator. |
|  [authenticateWithRecoveryCode(code)](./web.mfacontainer.authenticatewithrecoverycode.md) |  | Perform MFA using recovery code. |
|  [authenticateWithTOTP(options)](./web.mfacontainer.authenticatewithtotp.md) |  | Perform MFA using time-based one time password (TOTP) MFA authenticator. |
|  [createNewOOB(options)](./web.mfacontainer.createnewoob.md) |  | Creates new out-of-band (OOB) MFA authenticator. |
|  [createNewTOTP(options)](./web.mfacontainer.createnewtotp.md) |  | Creates new time-based one time password (TOTP) MFA authenticator. |
|  [deleteAuthenticator(id)](./web.mfacontainer.deleteauthenticator.md) |  | Delete the MFA authenticator with specified ID. |
|  [getAuthenticators()](./web.mfacontainer.getauthenticators.md) |  | Returns a list of configured MFA authenticators. |
|  [listRecoveryCode()](./web.mfacontainer.listrecoverycode.md) |  | Returns a list of MFA recovery code. |
|  [regenerateRecoveryCode()](./web.mfacontainer.regeneraterecoverycode.md) |  | Regenerates MFA recovery codes. |
|  [revokeAllTrustedDevices()](./web.mfacontainer.revokealltrusteddevices.md) |  | Revokes all MFA trusted devices. |
|  [triggerOOB(authenticatorID)](./web.mfacontainer.triggeroob.md) |  | Triggers out-of-band (OOB) MFA. |
