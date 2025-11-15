# Password Management Policy

**[ORGANIZATION_NAME]**

---

## 1. Purpose

Establish standards for password creation, management, and protection to prevent unauthorized access.

---

## 2. Scope

All users of organizational systems requiring authentication.

---

## 3. Password Requirements

### 3.1 Complexity Standards
- **Minimum Length:** 14 characters (or 12 with special characters)
- **Character Types:** UPPERCASE, lowercase, numbers, special characters
- **Prohibited:** Username, dictionary words, previous passwords (last 5)
- **No Sequential:** Cannot be predictable (123, ABC, etc.)

### 3.2 Password Quality
- Cannot be entirely numeric or alphabetic
- Must not contain personal information
- Must not match common passwords (check against common password lists)

---

## 4. Password Lifecycle

### 4.1 Initial Password
- Temporary password provided
- Must be changed on first login
- User enters own password
- Cannot be same as temporary

### 4.2 Password Changes
- **Sensitive Accounts (Admin):** Every 90 days
- **Standard Accounts:** Every 180 days
- **System Accounts:** Every 180 days
- **Automatic Expiration:** Enforced by system

### 4.3 Compromised Password
- Changed immediately
- Incident reported to security
- Account monitored for misuse
- Password reset assistance provided

---

## 5. Password Protection

### 5.1 Password Storage
- Never written down
- Not stored in unsecured locations
- Password manager strongly encouraged
- Personal device password managers acceptable

### 5.2 Password Transmission
- Never shared via email
- Never shared via chat or messaging
- Only through secure password reset
- Only to trusted IT personnel (if necessary)

### 5.3 Password Handling
- Never revealed to anyone
- Never guessed by others
- Never cached in browsers
- Never saved in profiles or scripts

---

## 6. Password Sharing Prohibited

- **Shared Accounts:** Prohibited (use individual accounts)
- **Password Sharing:** Strictly prohibited
- **Exceptions:** Only with documented justification and secure methods
- **Audit Trail:** Maintained for all access

---

## 7. Multi-Factor Authentication (MFA)

### 7.1 MFA Requirement
- Required for: Administrative accounts
- Required for: Remote access
- Required for: Sensitive data access
- Recommended for: All user accounts

### 7.2 MFA Methods
1. **Authenticator App** (Preferred)
   - Time-based one-time password (TOTP)
   - Examples: Google Authenticator, Authy, Microsoft Authenticator

2. **Hardware Token** (Highly Secure)
   - Physical security key
   - No battery required
   - Examples: YubiKey, Titan Key

3. **SMS/Phone Call** (Acceptable but less secure)
   - One-time code via text message
   - Phone-based verification
   - Acceptable for lower-risk accounts

### 7.3 Backup Codes
- Provided upon MFA registration
- Stored securely (not with password)
- Can be used if device lost
- Single-use only

---

## 8. Password Reset

### 8.1 User-Initiated Reset
- Identity verification required
- Security questions or email verification
- Temporary password issued
- User must change on next login

### 8.2 Forgotten Password
- Self-service reset preferred
- IT assistance if self-service fails
- Identity verification required
- No password revealed to user

### 8.3 Password Reset Links
- Unique, time-limited links only
- Expire within 24 hours
- Single-use only
- Secure transport (HTTPS)

---

## 9. Special Account Types

### 9.1 Administrative Accounts
- Separate from user account
- 90-day password change cycle
- Multi-factor authentication mandatory
- Privileged access management required
- Usage logged

### 9.2 Service Accounts
- Strong password (20+ characters)
- Stored in password vault
- Quarterly password changes
- Access limited to necessary systems
- Monitored for unusual activity

### 9.3 System Accounts
- Default passwords always changed
- Strong unique password set
- Stored securely
- No human access (if possible)

---

## 10. Password Recovery

### 10.1 Account Lockout
- Locked after 5 failed attempts
- Lockout duration: 30 minutes
- Automatic unlock after timeout
- Incident logging enabled

### 10.2 Account Unlock
- User self-service if available
- IT assistance if required
- Verification of identity necessary
- Audit trail maintained

---

## 11. Training and Awareness

- Annual password security training required
- New employee training during onboarding
- Training covers: complexity, protection, sharing
- Test questions to verify understanding

---

## 12. Non-Compliance

Violations may result in:
- Account suspension
- Mandatory retraining
- Disciplinary action
- Termination (if severe or repeated)

---

**Contact:** [CISO_EMAIL]
**Last Updated:** [DATE]
