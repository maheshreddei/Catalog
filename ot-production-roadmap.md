# OT detection production roadmap

Prepared 2026-11-05 from the updated 81-design catalog, using the mitre-ics and ot-detections-investigations skills.

The catalog status is **Proposed; not implemented or site validated**. This roadmap is an analyst-developed proposal, not evidence of deployment, telemetry readiness or customer approval. The original reference ideas overlap these designs and are not additional production detections.

## Delivery model

Use a common detection core, a sector-specific context pack and a customer/site policy configuration. Select one representative customer site first, then a representative site in each sector before wider rollout. Timings below are illustrative, overlap intentionally and depend on evidence and approvals. High-consequence coverage can move earlier when ready. No site needs every protocol case.

Lifecycle per detection: Designed → Implemented → Offline validated → Customer shadow → Customer approved → Production → Reviewed. Retain a reversible rule version and a route back to shadow when evidence quality degrades.

## Stage roadmap

| Stage | Indicative window | Designs | Main owner |
|---|---|---:|---|
| 0 — Evidence readiness | Weeks 1–2 | 3 | Detection engineering and SOC service owner |
| 1 — Pilot | Weeks 3–6 | 10 | SOC lead, network owner and customer OT owner |
| 2 — Host, identity and perimeter expansion | Weeks 5–10 | 24 | Endpoint/identity owners and SOC detection engineering |
| 3 — Industrial protocol controls | Weeks 7–12 | 22 | OT network engineer, protocol specialist and control engineer |
| 4 — Engineering changes and safety controls | Weeks 9–16; earlier where ready | 14 | Control engineering, SIS owner and customer operations |
| 5 — Process context and incident correlation | Weeks 12–20; readiness dependent | 8 | Process engineer, safety owner and SOC incident lead |
| 6 — Managed service at scale | After site acceptance; ongoing | Promote applicable validated designs | security service service owner + customer OT owner |

## Promotion gates

1. **Ready for shadow:** required sources and fields are evidenced; stable customer/site/asset identifiers exist; timestamp uncertainty and retention are documented; approved operational policy and rule owner are assigned. Missing prerequisites mean blocked or inconclusive, not malicious.
2. **Ready for customer approval:** safely replayed or offline tests cover the target behavior, approved maintenance lookalikes, blocked versus successful outcomes, missing observations, delayed events and clock offsets. Validate joins and tenant isolation. Record measured detection delay, actionable-alert rate and analyst workload against customer-approved targets. Baseline across relevant shifts, maintenance and operating modes.
3. **Ready for production:** an analyst can explain what happened, how, affected assets/process area, confidence, missing evidence and the next safe action. Customer operations signs off exceptions, severity, escalation, support ownership and rollback.
4. **Ready to scale:** repeat onboarding and validation at each site; prove identical private IPs or account names cannot mix tenants. Monitor ingestion, parsing, alert delivery, investigation completeness, maintenance noise and rule drift. Exercise handover and escalation. Revalidate after firmware, engineering, topology or process changes.

Set numerical thresholds and service objectives with each customer based on asset consequence, observed baseline and SOC capacity; the catalog does not supply validated universal values. No automatic controller isolation, operating-mode change or safety action is included.

## 0 — Evidence readiness

Confirm ingestion, parsing, source health, time uncertainty, tenant/site attribution, evidence links and escalation delivery. These are service-assurance cases, not proof of attacker behavior.

| Catalog ID | Detection design | Current catalog technique associations |
|---|---|---|
| [OT-DC-071](./ot-detection-catalog-by-log-source.html#OT-DC-071-logic) | Monitoring telemetry gap, parser failure or coverage loss | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-072](./ot-detection-catalog-by-log-source.html#OT-DC-072-logic) | Clock drift or unauthorized time-source change | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-074](./ot-detection-catalog-by-log-source.html#OT-DC-074-logic) | OT detection escalation or SOC evidence-transfer failure | No technique association in the design JSON; preserve operational or conditional status |

## 1 — Pilot

Start at one representative site. Use VPN/PAM/jump, firewall, identity, endpoint audit and passive asset visibility. Establish approved access paths, accounts, vendors, maintenance and conduits before policy-based alerting.

| Catalog ID | Detection design | Current catalog technique associations |
|---|---|---|
| [OT-DC-001](./ot-detection-catalog-by-log-source.html#OT-DC-001-logic) | External remote access outside authorized scope | T0822 External Remote Services (Primary proposed behavior) |
| [OT-DC-002](./ot-detection-catalog-by-log-source.html#OT-DC-002-logic) | Internal remote service access outside approved host pairing | T0886 Remote Services (Primary proposed behavior) |
| [OT-DC-003](./ot-detection-catalog-by-log-source.html#OT-DC-003-logic) | Authentication attack against OT access services | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-004](./ot-detection-catalog-by-log-source.html#OT-DC-004-logic) | Dormant or shared OT account used outside authorized context | T0859 Valid Accounts (Primary proposed behavior) |
| [OT-DC-005](./ot-detection-catalog-by-log-source.html#OT-DC-005-logic) | Unapproved IT–DMZ–OT conduit or gateway bypass | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-007](./ot-detection-catalog-by-log-source.html#OT-DC-007-logic) | New or unauthorized device on an OT segment | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-009](./ot-detection-catalog-by-log-source.html#OT-DC-009-logic) | Unapproved outbound OT or cloud-agent connection | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-012](./ot-detection-catalog-by-log-source.html#OT-DC-012-logic) | OT management or security policy weakened | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-013](./ot-detection-catalog-by-log-source.html#OT-DC-013-logic) | Active scanning of OT assets or control ports | T0846.001 Port Scan (Primary proposed behavior) |
| [OT-DC-060](./ot-detection-catalog-by-log-source.html#OT-DC-060-logic) | Security or OT application logs cleared or tampered with | T0872 Indicator Removal on Host (Primary proposed behavior) |

## 2 — Host, identity and perimeter expansion

Enable only where supported host or application audit exists. Confirm process ancestry and outcomes. Treat exposure and vulnerability changes as posture workflows. Default-credential use needs attributable evidence; do not test passwords on live devices.

| Catalog ID | Detection design | Current catalog technique associations |
|---|---|---|
| [OT-DC-010](./ot-detection-catalog-by-log-source.html#OT-DC-010-logic) | Internet exposure of an OT management or control service | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-011](./ot-detection-catalog-by-log-source.html#OT-DC-011-logic) | Unauthorized wireless or out-of-band OT access | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-018](./ot-detection-catalog-by-log-source.html#OT-DC-018-logic) | Unusual access to historian or engineering repositories | T0811 Data from Information Repositories (Primary proposed behavior) |
| [OT-DC-038](./ot-detection-catalog-by-log-source.html#OT-DC-038-logic) | Unapproved Windows patch, software or engineering file deployment | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-039](./ot-detection-catalog-by-log-source.html#OT-DC-039-logic) | Protected engineering project file modified or substituted | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-052](./ot-detection-catalog-by-log-source.html#OT-DC-052-logic) | Removable media connected against OT policy | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-053](./ot-detection-catalog-by-log-source.html#OT-DC-053-logic) | Suspicious script or executable started on an OT host | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-054](./ot-detection-catalog-by-log-source.html#OT-DC-054-logic) | Unapproved remote-management tool installation or first use | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-055](./ot-detection-catalog-by-log-source.html#OT-DC-055-logic) | Potential credential theft on an OT Windows host | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-056](./ot-detection-catalog-by-log-source.html#OT-DC-056-logic) | Unapproved host persistence or remote execution | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-057](./ot-detection-catalog-by-log-source.html#OT-DC-057-logic) | Suspected process injection or unapproved vulnerable driver load | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-058](./ot-detection-catalog-by-log-source.html#OT-DC-058-logic) | OT host file encryption or destructive file operations | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-059](./ot-detection-catalog-by-log-source.html#OT-DC-059-logic) | Sensitive engineering data staged or transferred without approval | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-061](./ot-detection-catalog-by-log-source.html#OT-DC-061-logic) | Threat-intelligence match with OT asset context | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-062](./ot-detection-catalog-by-log-source.html#OT-DC-062-logic) | Suspected C2-like DNS or HTTPS communication | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-063](./ot-detection-catalog-by-log-source.html#OT-DC-063-logic) | OT-related identity lifecycle or privilege change | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-064](./ot-detection-catalog-by-log-source.html#OT-DC-064-logic) | MFA prompt abuse or identity-session inconsistency | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-066](./ot-detection-catalog-by-log-source.html#OT-DC-066-logic) | Repeated blocked access or perimeter reconnaissance | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-067](./ot-detection-catalog-by-log-source.html#OT-DC-067-logic) | Web exploitation or web-shell sequence on an OT-adjacent service | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-068](./ot-detection-catalog-by-log-source.html#OT-DC-068-logic) | Unauthorized network application or transfer channel | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-069](./ot-detection-catalog-by-log-source.html#OT-DC-069-logic) | Domain, share or OT-host discovery from an unexpected account | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-073](./ot-detection-catalog-by-log-source.html#OT-DC-073-logic) | Unapproved security posture or vulnerability exposure change | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-075](./ot-detection-catalog-by-log-source.html#OT-DC-075-logic) | Anonymous or first-seen access to an OT management service | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-076](./ot-detection-catalog-by-log-source.html#OT-DC-076-logic) | Confirmed use of manufacturer default credentials | T1694.001 Default Credentials (Primary proposed behavior) |

## 3 — Industrial protocol controls

Select only protocols deployed at the site. Require decoded operations, source/target roles, address/tag maps, results and approval context. Encrypted application traffic may need server/device audit. A request, accepted action and physical effect are different observations.

| Catalog ID | Detection design | Current catalog technique associations |
|---|---|---|
| [OT-DC-006](./ot-detection-catalog-by-log-source.html#OT-DC-006-logic) | Unexpected historian or gateway replication direction | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-008](./ot-detection-catalog-by-log-source.html#OT-DC-008-logic) | Engineering or control protocol initiated by an unapproved host | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-014](./ot-detection-catalog-by-log-source.html#OT-DC-014-logic) | Unapproved industrial device discovery broadcast | T0846.002 Broadcast Discovery (Primary proposed behavior) |
| [OT-DC-015](./ot-detection-catalog-by-log-source.html#OT-DC-015-logic) | Controller identity or diagnostic enumeration | T0888 Remote System Information Discovery (Primary proposed behavior) |
| [OT-DC-016](./ot-detection-catalog-by-log-source.html#OT-DC-016-logic) | Unapproved point, tag or address-space enumeration | T0861 Point & Tag Identification (Primary proposed behavior) |
| [OT-DC-017](./ot-detection-catalog-by-log-source.html#OT-DC-017-logic) | Unapproved controller program readout | T0845 Program Upload (Primary proposed behavior) |
| [OT-DC-019](./ot-detection-catalog-by-log-source.html#OT-DC-019-logic) | Unauthorized Modbus write to mapped control points | T1692.001 Command Message (Primary proposed behavior) |
| [OT-DC-020](./ot-detection-catalog-by-log-source.html#OT-DC-020-logic) | Modbus communication restart or listen-only request | T1692.001 Command Message (Primary proposed behavior) |
| [OT-DC-022](./ot-detection-catalog-by-log-source.html#OT-DC-022-logic) | Unauthorized DNP3 control-point operation | T1692.001 Command Message (Primary proposed behavior) |
| [OT-DC-023](./ot-detection-catalog-by-log-source.html#OT-DC-023-logic) | Unapproved DNP3 outstation restart | T0816 Device Restart/Shutdown (Primary proposed behavior) |
| [OT-DC-025](./ot-detection-catalog-by-log-source.html#OT-DC-025-logic) | Unauthorized IEC-104 control command | T1692.001 Command Message (Primary proposed behavior) |
| [OT-DC-027](./ot-detection-catalog-by-log-source.html#OT-DC-027-logic) | Unauthorized MMS or OPC UA control write or method call | T1692.001 Command Message (Primary proposed behavior) |
| [OT-DC-028](./ot-detection-catalog-by-log-source.html#OT-DC-028-logic) | Unauthorized CIP or BACnet configuration/control write | T1692.001 Command Message (Primary proposed behavior) |
| [OT-DC-029](./ot-detection-catalog-by-log-source.html#OT-DC-029-logic) | Unapproved BACnet restart or communications-disable request | T1692.001 Command Message (Primary proposed behavior) |
| [OT-DC-030](./ot-detection-catalog-by-log-source.html#OT-DC-030-logic) | Unapproved MQTT control publication or retained-command change | T1692.001 Command Message (Primary proposed behavior) |
| [OT-DC-040](./ot-detection-catalog-by-log-source.html#OT-DC-040-logic) | OPC UA identity or channel-security policy violation | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-041](./ot-detection-catalog-by-log-source.html#OT-DC-041-logic) | OPC UA certificate validation bypass or unauthorized trust change | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-077](./ot-detection-catalog-by-log-source.html#OT-DC-077-logic) | Unauthorized OT web-management control action after login | T1692.001 Command Message (Primary proposed behavior) |
| [OT-DC-078](./ot-detection-catalog-by-log-source.html#OT-DC-078-logic) | Unauthorized S7 variable write to a protected address | T1692.001 Command Message (Primary proposed behavior) |
| [OT-DC-079](./ot-detection-catalog-by-log-source.html#OT-DC-079-logic) | Unapproved CIP connection establishment | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-080](./ot-detection-catalog-by-log-source.html#OT-DC-080-logic) | Control command outside approved HMI-to-controller pairing | T1692.001 Command Message (Primary proposed behavior) |
| [OT-DC-081](./ot-detection-catalog-by-log-source.html#OT-DC-081-logic) | Unapproved file placement on an OT controller or gateway | No technique association in the design JSON; preserve operational or conditional status |

## 4 — Engineering changes and safety controls

Use approved project baselines, programming audit, controller/SIS events, maintenance and permits. Start program-download and mode-change cases 032/021 in parallel with the pilot if evidence is available. Validate SIS cases using approved offline/replayed evidence; no live command injection.

| Catalog ID | Detection design | Current catalog technique associations |
|---|---|---|
| [OT-DC-021](./ot-detection-catalog-by-log-source.html#OT-DC-021-logic) | Unapproved controller CPU operating-mode command | T0858 Change Operating Mode (Primary proposed behavior) |
| [OT-DC-024](./ot-detection-catalog-by-log-source.html#OT-DC-024-logic) | Unapproved suppression of reporting or alarms | T1691.002 Reporting Message (Primary proposed behavior); T0878 Alarm Suppression (Supporting/alternative mechanism — apply only when evidenced) |
| [OT-DC-026](./ot-detection-catalog-by-log-source.html#OT-DC-026-logic) | Unexpected command fan-out across process areas or sites | T1692.001 Command Message (Primary proposed behavior) |
| [OT-DC-031](./ot-detection-catalog-by-log-source.html#OT-DC-031-logic) | Suspected reporting-message spoofing or replay | T1692.002 Reporting Message (Primary proposed behavior) |
| [OT-DC-032](./ot-detection-catalog-by-log-source.html#OT-DC-032-logic) | Unapproved controller program download or online edit | T0843 Program Download (Primary proposed behavior) |
| [OT-DC-033](./ot-detection-catalog-by-log-source.html#OT-DC-033-logic) | Controller logic differs from an approved reference | T0889 Modify Program (Primary proposed behavior) |
| [OT-DC-034](./ot-detection-catalog-by-log-source.html#OT-DC-034-logic) | Unapproved firmware update, downgrade or integrity failure | T1693 Modify Firmware (Primary proposed behavior) |
| [OT-DC-035](./ot-detection-catalog-by-log-source.html#OT-DC-035-logic) | Unexpected firmware-update-mode activation | T0800 Activate Firmware Update Mode (Primary proposed behavior) |
| [OT-DC-036](./ot-detection-catalog-by-log-source.html#OT-DC-036-logic) | Unapproved HMI project, screen or display configuration change | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-037](./ot-detection-catalog-by-log-source.html#OT-DC-037-logic) | Alarm threshold or alarm-routing configuration changed without approval | T0838 Modify Alarm Settings (Primary proposed behavior) |
| [OT-DC-042](./ot-detection-catalog-by-log-source.html#OT-DC-042-logic) | Unauthorized write or control action directed at SIS | T1692.001 Command Message (Primary proposed behavior) |
| [OT-DC-043](./ot-detection-catalog-by-log-source.html#OT-DC-043-logic) | Safety bypass, inhibit or override outside authorized scope | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-044](./ot-detection-catalog-by-log-source.html#OT-DC-044-logic) | Unapproved forced I/O on a safety or process controller | T0835 Manipulate I/O Image (Primary proposed behavior) |
| [OT-DC-045](./ot-detection-catalog-by-log-source.html#OT-DC-045-logic) | Setpoint outside approved range or rate of change | T0836 Modify Parameter (Primary proposed behavior) |

## 5 — Process context and incident correlation

Require operating modes, units, historian quality, cause/effect context, known outages and dependencies. Plant alarms remain owned by operations. Use independent evidence to distinguish faults, communications failures, cyber actions and demonstrated process effects.

| Catalog ID | Detection design | Current catalog technique associations |
|---|---|---|
| [OT-DC-046](./ot-detection-catalog-by-log-source.html#OT-DC-046-logic) | Process value outside its mode-specific operating envelope | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-047](./ot-detection-catalog-by-log-source.html#OT-DC-047-logic) | Safety margin approaching a trip threshold | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-048](./ot-detection-catalog-by-log-source.html#OT-DC-048-logic) | Unexpected trip or missing expected protective response | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-049](./ot-detection-catalog-by-log-source.html#OT-DC-049-logic) | Safety voting degradation or redundant sensor disagreement | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-050](./ot-detection-catalog-by-log-source.html#OT-DC-050-logic) | Frozen, stale or inconsistent process reporting | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-051](./ot-detection-catalog-by-log-source.html#OT-DC-051-logic) | Loss of controller, SIS or remote-site telemetry | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-065](./ot-detection-catalog-by-log-source.html#OT-DC-065-logic) | Network volume, connection rate or service-exhaustion anomaly | No technique association in the design JSON; preserve operational or conditional status |
| [OT-DC-070](./ot-detection-catalog-by-log-source.html#OT-DC-070-logic) | Correlated suspicious activity across IT, DMZ and OT | No technique association in the design JSON; preserve operational or conditional status |

## Sector-specific selection

| Sector | Early additions after the shared pilot | Engineering context required |
|---|---|---|
| Airports | 008, 028/029 for deployed BACnet; 032, 036 and 080 for baggage, utilities or other in-scope control systems | Terminal/building/baggage asset roles, approved integrators and commissioning windows |
| Aviation facilities / MRO | 053, 054, 058, 039, 032 for in-scope industrial and support systems | Engineering project ownership, maintenance workflows and facility boundaries; onboard aircraft/avionics need a separate scope and engineering assessment |
| Petrochemical | 032, 021, 037, 042–045; then 047–049 | DCS/SIS roles, SIF/permit context, approved bypass duration and operating mode |
| Gas distribution | 051 early; 022/023 or 025 where deployed, 026, 045 and 050 | SCADA master/outstation pairings, remote-site communications, station operating limits and planned switching |

Numbers in this table refer to OT-DC IDs. These are candidate sector packs, not claims about installed equipment. Promote 051 earlier wherever remote-site availability is a major concern.

## First pilot deliverables

Three assurance cases (071, 072, 074), ten pilot designs (001, 002, 003, 004, 005, 007, 009, 012, 013, 060), a site asset/conduit baseline, an approved-access policy, safely obtained test evidence, tuning records, an analyst runbook, escalation contacts and a customer acceptance record. Add 032/021 as an early engineering-change track if their telemetry is ready.

## Confidence at scale: incident acceptance example

For a suspected remote-access-to-controller-change incident, correlate 001 → 032 → 021 only when session, asset, timing and action evidence support the links. Include VPN/PAM records, jump-host actions, controller/programming audit, the change ticket and relevant process observations. Report a programming request, accepted download, confirmed logic change and process consequence separately. Do not infer a username from unauthenticated control traffic or declare a process effect from a command alone. Case 070 becomes useful when these individual signals are reliable.

## Final stage: sustained managed service

The final stage is an accepted, monitored service for each applicable customer/site pack. It does not require all 81 designs to be enabled everywhere. Maintain a readiness register with: customer/site, use-case ID, sector/protocol applicability, required-source readiness, policy owner, implemented query version, test evidence, shadow results, exceptions, acceptance date, production status and next review. ATT&CK associations describe behavior coverage; report implemented and validated coverage separately.

## References

- Local updated catalog: [catalog](./ot-detection-catalog-by-log-source.html), [design data](./ot-detection-use-cases.json). Technique associations above reproduce the design data; the HTML may contain further reviewed conditional associations.
- Local MITRE ICS snapshot: version 20.0, retrieved 2026-11-02. Stage order is based on evidence dependencies and operational risk, not ATT&CK tactic order.
- [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final): OT security must account for performance, reliability and safety. Stage assignments, timelines and promotion gates here are proposed for this catalog, not NIST-prescribed milestones.

## Full-catalog reconciliation

Updated to explicitly include every unique record in the current catalog: 81 OT-DC designs and 98 LS references (LS-OT and LS-ENT). These are 179 catalog records, not 179 independent validated rules. Each LS predicate remains in scope even when it shares an ATT&CK technique with an OT-DC design. Candidate associations below do not prove complete coverage. Production readiness remains unverified.

[Filterable full roadmap](./ot-full-catalog-roadmap.html) · [Complete evidence/prerequisite register](./ot-full-catalog-roadmap.json)

| Stage | OT-DC | LS-OT | LS-ENT | Total |
|---|---:|---:|---:|---:|
| 0 — Evidence readiness | 3 | 0 | 0 | 3 |
| 1 — Pilot | 10 | 12 | 2 | 24 |
| 2 — Host, identity and perimeter | 24 | 13 | 9 | 46 |
| 3 — Industrial protocol controls | 22 | 26 | 0 | 48 |
| 4 — Engineering changes and safety | 14 | 22 | 1 | 37 |
| 5 — Process context and correlation | 8 | 13 | 0 | 21 |

LS-OT-T0836-D04 is assigned a target stage but blocked until detection logic, fields and policy are specified. Some source predicates intentionally alert on an observed request or important-object access even during authorized work. Preserve that event meaning, then attach approval context and operational triage; do not silently relabel every such event as an unauthorized or successful attack. Exercise-specific lab wording in source specifications must be translated into customer asset scope and supported evidence before production.

### Stage 0: full entry list

| ID | Use case | Relationship / readiness |
|---|---|---|
| [OT-DC-071](./ot-detection-catalog-by-log-source.html#OT-DC-071-logic) | Monitoring telemetry gap, parser failure or coverage loss | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-072](./ot-detection-catalog-by-log-source.html#OT-DC-072-logic) | Clock drift or unauthorized time-source change | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-074](./ot-detection-catalog-by-log-source.html#OT-DC-074-logic) | OT detection escalation or SOC evidence-transfer failure | Standalone OT-DC design; no equivalence inferred |

### Stage 1: full entry list

| ID | Use case | Relationship / readiness |
|---|---|---|
| [LS-OT-T0859-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0859-D01-logic) | First-time or rare OT asset access | Potential partial overlap; separate predicate validation required; candidates: OT-DC-001, OT-DC-002, OT-DC-003, OT-DC-004 |
| [LS-OT-T0859-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T0859-D02-logic) | Access outside a normal work window | Potential partial overlap; separate predicate validation required; candidates: OT-DC-001, OT-DC-002, OT-DC-003, OT-DC-004 |
| [LS-OT-T0859-D03](./ot-detection-catalog-by-log-source.html#LS-OT-T0859-D03-logic) | Unexpected source or access path | Potential partial overlap; separate predicate validation required; candidates: OT-DC-001, OT-DC-002, OT-DC-003, OT-DC-004 |
| [LS-OT-T0859-D04](./ot-detection-catalog-by-log-source.html#LS-OT-T0859-D04-logic) | One identity on multiple OT assets | Potential partial overlap; separate predicate validation required; candidates: OT-DC-001, OT-DC-002, OT-DC-003, OT-DC-004 |
| [LS-OT-T0859-D05](./ot-detection-catalog-by-log-source.html#LS-OT-T0859-D05-logic) | Service account used interactively | Potential partial overlap; separate predicate validation required; candidates: OT-DC-001, OT-DC-002, OT-DC-003, OT-DC-004 |
| [LS-OT-T0859-D06](./ot-detection-catalog-by-log-source.html#LS-OT-T0859-D06-logic) | Dormant or vendor account becomes active | Potential partial overlap; separate predicate validation required; candidates: OT-DC-001, OT-DC-002, OT-DC-003, OT-DC-004 |
| [LS-OT-T0859-D07](./ot-detection-catalog-by-log-source.html#LS-OT-T0859-D07-logic) | Failures, then success and OT access | Potential partial overlap; separate predicate validation required; candidates: OT-DC-001, OT-DC-002, OT-DC-003, OT-DC-004 |
| [LS-OT-T0859-D08](./ot-detection-catalog-by-log-source.html#LS-OT-T0859-D08-logic) | Unexpected privileged session | Potential partial overlap; separate predicate validation required; candidates: OT-DC-001, OT-DC-002, OT-DC-003, OT-DC-004 |
| [OT-DC-004](./ot-detection-catalog-by-log-source.html#OT-DC-004-logic) | Dormant or shared OT account used outside authorized context | Standalone OT-DC design; no equivalence inferred |
| [LS-ENT-T1110.001-D01](./ot-detection-catalog-by-log-source.html#LS-ENT-T1110.001-D01-logic) | Repeated password guesses against one account | Potential partial overlap; separate predicate validation required; candidates: OT-DC-003 |
| [LS-ENT-T1110.001-D02](./ot-detection-catalog-by-log-source.html#LS-ENT-T1110.001-D02-logic) | Successful login follows a password-guessing burst | Potential partial overlap; separate predicate validation required; candidates: OT-DC-003 |
| [OT-DC-003](./ot-detection-catalog-by-log-source.html#OT-DC-003-logic) | Authentication attack against OT access services | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-060](./ot-detection-catalog-by-log-source.html#OT-DC-060-logic) | Security or OT application logs cleared or tampered with | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0846-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0846-D01-logic) | One source contacts many devices | Potential partial overlap; separate predicate validation required; candidates: OT-DC-013 |
| [LS-OT-T0846-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T0846-D02-logic) | One source probes many ports | Potential partial overlap; separate predicate validation required; candidates: OT-DC-013 |
| [OT-DC-007](./ot-detection-catalog-by-log-source.html#OT-DC-007-logic) | New or unauthorized device on an OT segment | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-013](./ot-detection-catalog-by-log-source.html#OT-DC-013-logic) | Active scanning of OT assets or control ports | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0886-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0886-D01-logic) | Remote session over an unapproved path | Potential partial overlap; separate predicate validation required; candidates: OT-DC-002 |
| [LS-OT-T0886-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T0886-D02-logic) | Remote access outside the account role or window | Potential partial overlap; separate predicate validation required; candidates: OT-DC-002 |
| [OT-DC-002](./ot-detection-catalog-by-log-source.html#OT-DC-002-logic) | Internal remote service access outside approved host pairing | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-001](./ot-detection-catalog-by-log-source.html#OT-DC-001-logic) | External remote access outside authorized scope | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-005](./ot-detection-catalog-by-log-source.html#OT-DC-005-logic) | Unapproved IT–DMZ–OT conduit or gateway bypass | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-009](./ot-detection-catalog-by-log-source.html#OT-DC-009-logic) | Unapproved outbound OT or cloud-agent connection | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-012](./ot-detection-catalog-by-log-source.html#OT-DC-012-logic) | OT management or security policy weakened | Standalone OT-DC design; no equivalence inferred |

### Stage 2: full entry list

| ID | Use case | Relationship / readiness |
|---|---|---|
| [LS-ENT-T1190-D01](./ot-detection-catalog-by-log-source.html#LS-ENT-T1190-D01-logic) | Exploit request has a corroborated server-side effect | Potential partial overlap; separate predicate validation required; candidates: OT-DC-067 |
| [LS-ENT-T1190-D02](./ot-detection-catalog-by-log-source.html#LS-ENT-T1190-D02-logic) | Public application spawns an unapproved process | Potential partial overlap; separate predicate validation required; candidates: OT-DC-067 |
| [OT-DC-010](./ot-detection-catalog-by-log-source.html#OT-DC-010-logic) | Internet exposure of an OT management or control service | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-067](./ot-detection-catalog-by-log-source.html#OT-DC-067-logic) | Web exploitation or web-shell sequence on an OT-adjacent service | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-073](./ot-detection-catalog-by-log-source.html#OT-DC-073-logic) | Unapproved security posture or vulnerability exposure change | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0859-D09](./ot-detection-catalog-by-log-source.html#LS-OT-T0859-D09-logic) | Rapid lateral movement with valid accounts | Potential partial overlap; separate predicate validation required; candidates: OT-DC-001, OT-DC-002, OT-DC-003, OT-DC-004 |
| [LS-OT-T0892-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0892-D01-logic) | Device credential changed without approval | Potential partial overlap; separate predicate validation required; candidates: OT-DC-012, OT-DC-063 |
| [LS-OT-T0892-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T0892-D02-logic) | Unexpected actor changes a sensitive credential | Potential partial overlap; separate predicate validation required; candidates: OT-DC-012, OT-DC-063 |
| [LS-ENT-T1098-D01](./ot-detection-catalog-by-log-source.html#LS-ENT-T1098-D01-logic) | Account credential changed to retain access | Potential partial overlap; separate predicate validation required; candidates: OT-DC-063 |
| [LS-ENT-T1098-D02](./ot-detection-catalog-by-log-source.html#LS-ENT-T1098-D02-logic) | Account receives unapproved access rights | Potential partial overlap; separate predicate validation required; candidates: OT-DC-063 |
| [LS-OT-T1694-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T1694-D01-logic) | Default credential used from an unexpected source | Potential partial overlap; separate predicate validation required; candidates: OT-DC-076 |
| [LS-OT-T1694-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T1694-D02-logic) | Default account used after commissioning | Potential partial overlap; separate predicate validation required; candidates: OT-DC-076 |
| [OT-DC-076](./ot-detection-catalog-by-log-source.html#OT-DC-076-logic) | Confirmed use of manufacturer default credentials | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-055](./ot-detection-catalog-by-log-source.html#OT-DC-055-logic) | Potential credential theft on an OT Windows host | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-063](./ot-detection-catalog-by-log-source.html#OT-DC-063-logic) | OT-related identity lifecycle or privilege change | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-064](./ot-detection-catalog-by-log-source.html#OT-DC-064-logic) | MFA prompt abuse or identity-session inconsistency | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-075](./ot-detection-catalog-by-log-source.html#OT-DC-075-logic) | Anonymous or first-seen access to an OT management service | Standalone OT-DC design; no equivalence inferred |
| [LS-ENT-T1059.004-D01](./ot-detection-catalog-by-log-source.html#LS-ENT-T1059.004-D01-logic) | Shell executes outside the approved OT workflow | Potential partial overlap; separate predicate validation required; candidates: OT-DC-053 |
| [OT-DC-053](./ot-detection-catalog-by-log-source.html#OT-DC-053-logic) | Suspicious script or executable started on an OT host | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-054](./ot-detection-catalog-by-log-source.html#OT-DC-054-logic) | Unapproved remote-management tool installation or first use | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-056](./ot-detection-catalog-by-log-source.html#OT-DC-056-logic) | Unapproved host persistence or remote execution | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-057](./ot-detection-catalog-by-log-source.html#OT-DC-057-logic) | Suspected process injection or unapproved vulnerable driver load | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-066](./ot-detection-catalog-by-log-source.html#OT-DC-066-logic) | Repeated blocked access or perimeter reconnaissance | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-069](./ot-detection-catalog-by-log-source.html#OT-DC-069-logic) | Domain, share or OT-host discovery from an unexpected account | Standalone OT-DC design; no equivalence inferred |
| [LS-ENT-T1105-D01](./ot-detection-catalog-by-log-source.html#LS-ENT-T1105-D01-logic) | Unapproved file enters the OT environment | Potential partial overlap; separate predicate validation required; candidates: OT-DC-038, OT-DC-053, OT-DC-081 |
| [LS-ENT-T1105-D02](./ot-detection-catalog-by-log-source.html#LS-ENT-T1105-D02-logic) | Unexpected executable or script staged after ingress | Potential partial overlap; separate predicate validation required; candidates: OT-DC-038, OT-DC-053, OT-DC-081 |
| [LS-ENT-T1570-D01](./ot-detection-catalog-by-log-source.html#LS-ENT-T1570-D01-logic) | Tool or file crosses an unapproved internal path | Potential partial overlap; separate predicate validation required; candidates: OT-DC-038, OT-DC-059 |
| [LS-ENT-T1570-D02](./ot-detection-catalog-by-log-source.html#LS-ENT-T1570-D02-logic) | Same unapproved artifact spreads across internal assets | Potential partial overlap; separate predicate validation required; candidates: OT-DC-038, OT-DC-059 |
| [OT-DC-011](./ot-detection-catalog-by-log-source.html#OT-DC-011-logic) | Unauthorized wireless or out-of-band OT access | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0884-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0884-D01-logic) | Unapproved relay or port-forward starts | Distinct LS predicate; adjacent OT-DC designs only; candidates: OT-DC-005, OT-DC-054, OT-DC-068 |
| [LS-OT-T0884-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T0884-D02-logic) | Traffic crosses an unapproved intermediary | Distinct LS predicate; adjacent OT-DC designs only; candidates: OT-DC-005, OT-DC-054, OT-DC-068 |
| [OT-DC-061](./ot-detection-catalog-by-log-source.html#OT-DC-061-logic) | Threat-intelligence match with OT asset context | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-062](./ot-detection-catalog-by-log-source.html#OT-DC-062-logic) | Suspected C2-like DNS or HTTPS communication | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-068](./ot-detection-catalog-by-log-source.html#OT-DC-068-logic) | Unauthorized network application or transfer channel | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0811-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0811-D01-logic) | Unexpected bulk export from an engineering repository | Potential partial overlap; separate predicate validation required; candidates: OT-DC-018, OT-DC-059 |
| [LS-OT-T0811-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T0811-D02-logic) | Sensitive repository accessed from an unusual source | Potential partial overlap; separate predicate validation required; candidates: OT-DC-018, OT-DC-059 |
| [OT-DC-018](./ot-detection-catalog-by-log-source.html#OT-DC-018-logic) | Unusual access to historian or engineering repositories | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0842-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0842-D01-logic) | Packet capture started outside diagnostics | Distinct LS predicate; adjacent OT-DC designs only; candidates: OT-DC-053, OT-DC-059 |
| [LS-OT-T0842-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T0842-D02-logic) | Capture scope or duration violates approval | Distinct LS predicate; adjacent OT-DC designs only; candidates: OT-DC-053, OT-DC-059 |
| [OT-DC-052](./ot-detection-catalog-by-log-source.html#OT-DC-052-logic) | Removable media connected against OT policy | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-059](./ot-detection-catalog-by-log-source.html#OT-DC-059-logic) | Sensitive engineering data staged or transferred without approval | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-038](./ot-detection-catalog-by-log-source.html#OT-DC-038-logic) | Unapproved Windows patch, software or engineering file deployment | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-039](./ot-detection-catalog-by-log-source.html#OT-DC-039-logic) | Protected engineering project file modified or substituted | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0881-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0881-D01-logic) | Critical service stopped outside approved maintenance | Distinct LS predicate; adjacent OT-DC designs only; candidates: OT-DC-056, OT-DC-058, OT-DC-051 |
| [LS-OT-T0881-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T0881-D02-logic) | Unexpected actor stops a critical service | Distinct LS predicate; adjacent OT-DC designs only; candidates: OT-DC-056, OT-DC-058, OT-DC-051 |
| [OT-DC-058](./ot-detection-catalog-by-log-source.html#OT-DC-058-logic) | OT host file encryption or destructive file operations | Standalone OT-DC design; no equivalence inferred |

### Stage 3: full entry list

| ID | Use case | Relationship / readiness |
|---|---|---|
| [LS-OT-T0871-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0871-D01-logic) | Sensitive device API invoked by an unapproved actor | Distinct LS predicate; adjacent OT-DC designs only; candidates: OT-DC-027, OT-DC-077 |
| [LS-OT-T0801-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0801-D01-logic) | Process state read from an unapproved source | Potential partial overlap; separate predicate validation required; candidates: OT-DC-016, OT-DC-018 |
| [LS-OT-T0801-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T0801-D02-logic) | Process-state polling outside its approved cadence | Potential partial overlap; separate predicate validation required; candidates: OT-DC-016, OT-DC-018 |
| [LS-OT-T0846-D03](./ot-detection-catalog-by-log-source.html#LS-OT-T0846-D03-logic) | Discovery from an unexpected source | Potential partial overlap; separate predicate validation required; candidates: OT-DC-014 |
| [LS-OT-T0846-D04](./ot-detection-catalog-by-log-source.html#LS-OT-T0846-D04-logic) | Unexpected broadcast or multicast discovery | Potential partial overlap; separate predicate validation required; candidates: OT-DC-014 |
| [LS-OT-T0861-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0861-D01-logic) | Read from an unexpected source | Potential partial overlap; separate predicate validation required; candidates: OT-DC-016 |
| [LS-OT-T0861-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T0861-D02-logic) | Too many tag read requests | Potential partial overlap; separate predicate validation required; candidates: OT-DC-016 |
| [LS-OT-T0861-D03](./ot-detection-catalog-by-log-source.html#LS-OT-T0861-D03-logic) | One source reads many different tags | Potential partial overlap; separate predicate validation required; candidates: OT-DC-016 |
| [LS-OT-T0861-D04](./ot-detection-catalog-by-log-source.html#LS-OT-T0861-D04-logic) | Read of an important object | Potential partial overlap; separate predicate validation required; candidates: OT-DC-016 |
| [OT-DC-016](./ot-detection-catalog-by-log-source.html#OT-DC-016-logic) | Unapproved point, tag or address-space enumeration | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0888-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0888-D01-logic) | Device identity queried by an unapproved source | Potential partial overlap; separate predicate validation required; candidates: OT-DC-015 |
| [LS-OT-T0888-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T0888-D02-logic) | Device identity collection across many OT assets | Potential partial overlap; separate predicate validation required; candidates: OT-DC-015 |
| [OT-DC-015](./ot-detection-catalog-by-log-source.html#OT-DC-015-logic) | Controller identity or diagnostic enumeration | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-014](./ot-detection-catalog-by-log-source.html#OT-DC-014-logic) | Unapproved industrial device discovery broadcast | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0830-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0830-D01-logic) | OT address mapping conflicts with the approved network | Distinct LS predicate; adjacent OT-DC designs only; candidates: OT-DC-007 |
| [LS-OT-T0830-D03](./ot-detection-catalog-by-log-source.html#LS-OT-T0830-D03-logic) | Unexpected forwarding or interception appears on an OT path | Distinct LS predicate; adjacent OT-DC designs only; candidates: OT-DC-005, OT-DC-068 |
| [OT-DC-006](./ot-detection-catalog-by-log-source.html#OT-DC-006-logic) | Unexpected historian or gateway replication direction | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-008](./ot-detection-catalog-by-log-source.html#OT-DC-008-logic) | Engineering or control protocol initiated by an unapproved host | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-040](./ot-detection-catalog-by-log-source.html#OT-DC-040-logic) | OPC UA identity or channel-security policy violation | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-041](./ot-detection-catalog-by-log-source.html#OT-DC-041-logic) | OPC UA certificate validation bypass or unauthorized trust change | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-079](./ot-detection-catalog-by-log-source.html#OT-DC-079-logic) | Unapproved CIP connection establishment | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0802-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0802-D01-logic) | Unapproved automation collects operational data | Distinct LS predicate; adjacent OT-DC designs only; candidates: OT-DC-016, OT-DC-018 |
| [LS-OT-T0802-D03](./ot-detection-catalog-by-log-source.html#LS-OT-T0802-D03-logic) | Automated collection spans an unusual object set | Distinct LS predicate; adjacent OT-DC designs only; candidates: OT-DC-016, OT-DC-018 |
| [OT-DC-017](./ot-detection-catalog-by-log-source.html#OT-DC-017-logic) | Unapproved controller program readout | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-081](./ot-detection-catalog-by-log-source.html#OT-DC-081-logic) | Unapproved file placement on an OT controller or gateway | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0848-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0848-D01-logic) | New or unapproved master | Potential partial overlap; separate predicate validation required; candidates: OT-DC-007, OT-DC-008, OT-DC-080 |
| [LS-OT-T0848-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T0848-D02-logic) | Unknown device on a control path | Potential partial overlap; separate predicate validation required; candidates: OT-DC-007, OT-DC-008, OT-DC-080 |
| [LS-OT-T0848-D03](./ot-detection-catalog-by-log-source.html#LS-OT-T0848-D03-logic) | Device uses an unapproved control role | Potential partial overlap; separate predicate validation required; candidates: OT-DC-007, OT-DC-008, OT-DC-080 |
| [LS-OT-T0848-D04](./ot-detection-catalog-by-log-source.html#LS-OT-T0848-D04-logic) | Master identity from an unexpected device | Potential partial overlap; separate predicate validation required; candidates: OT-DC-007, OT-DC-008, OT-DC-080 |
| [LS-OT-T0848-D05](./ot-detection-catalog-by-log-source.html#LS-OT-T0848-D05-logic) | Unapproved master reaches several controllers | Potential partial overlap; separate predicate validation required; candidates: OT-DC-007, OT-DC-008, OT-DC-080 |
| [LS-OT-T1692.001-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T1692.001-D01-logic) | Write from an unexpected source | Potential partial overlap; separate predicate validation required; candidates: OT-DC-019, OT-DC-022, OT-DC-025, OT-DC-027, OT-DC-028, OT-DC-030, OT-DC-078, OT-DC-080 |
| [LS-OT-T1692.001-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T1692.001-D02-logic) | Command function outside the allowed list | Potential partial overlap; separate predicate validation required; candidates: OT-DC-019, OT-DC-022, OT-DC-025, OT-DC-027, OT-DC-028, OT-DC-030, OT-DC-078, OT-DC-080 |
| [LS-OT-T1692.001-D03](./ot-detection-catalog-by-log-source.html#LS-OT-T1692.001-D03-logic) | Write to an important object | Potential partial overlap; separate predicate validation required; candidates: OT-DC-019, OT-DC-022, OT-DC-025, OT-DC-027, OT-DC-028, OT-DC-030, OT-DC-078, OT-DC-080 |
| [OT-DC-019](./ot-detection-catalog-by-log-source.html#OT-DC-019-logic) | Unauthorized Modbus write to mapped control points | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-020](./ot-detection-catalog-by-log-source.html#OT-DC-020-logic) | Modbus communication restart or listen-only request | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-022](./ot-detection-catalog-by-log-source.html#OT-DC-022-logic) | Unauthorized DNP3 control-point operation | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-025](./ot-detection-catalog-by-log-source.html#OT-DC-025-logic) | Unauthorized IEC-104 control command | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-027](./ot-detection-catalog-by-log-source.html#OT-DC-027-logic) | Unauthorized MMS or OPC UA control write or method call | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-028](./ot-detection-catalog-by-log-source.html#OT-DC-028-logic) | Unauthorized CIP or BACnet configuration/control write | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-029](./ot-detection-catalog-by-log-source.html#OT-DC-029-logic) | Unapproved BACnet restart or communications-disable request | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-030](./ot-detection-catalog-by-log-source.html#OT-DC-030-logic) | Unapproved MQTT control publication or retained-command change | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-077](./ot-detection-catalog-by-log-source.html#OT-DC-077-logic) | Unauthorized OT web-management control action after login | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-078](./ot-detection-catalog-by-log-source.html#OT-DC-078-logic) | Unauthorized S7 variable write to a protected address | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-080](./ot-detection-catalog-by-log-source.html#OT-DC-080-logic) | Control command outside approved HMI-to-controller pairing | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0816-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0816-D01-logic) | Restart or shutdown command | Potential partial overlap; separate predicate validation required; candidates: OT-DC-020, OT-DC-023, OT-DC-029 |
| [LS-OT-T0816-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T0816-D02-logic) | Device restart or shutdown reported | Potential partial overlap; separate predicate validation required; candidates: OT-DC-020, OT-DC-023, OT-DC-029 |
| [LS-OT-T0816-D04](./ot-detection-catalog-by-log-source.html#LS-OT-T0816-D04-logic) | Restart command from an unexpected source | Potential partial overlap; separate predicate validation required; candidates: OT-DC-020, OT-DC-023, OT-DC-029 |
| [OT-DC-023](./ot-detection-catalog-by-log-source.html#OT-DC-023-logic) | Unapproved DNP3 outstation restart | Standalone OT-DC design; no equivalence inferred |

### Stage 4: full entry list

| ID | Use case | Relationship / readiness |
|---|---|---|
| [LS-OT-T0859-D10](./ot-detection-catalog-by-log-source.html#LS-OT-T0859-D10-logic) | Login followed by an engineering change | Potential partial overlap; separate predicate validation required; candidates: OT-DC-032, OT-DC-021, OT-DC-070 |
| [LS-ENT-T1059.004-D02](./ot-detection-catalog-by-log-source.html#LS-ENT-T1059.004-D02-logic) | Shell execution leads to a sensitive OT action | Potential partial overlap; separate predicate validation required; candidates: OT-DC-053 |
| [LS-OT-T0886-D03](./ot-detection-catalog-by-log-source.html#LS-OT-T0886-D03-logic) | Remote session followed by an unapproved engineering action | Potential partial overlap; separate predicate validation required; candidates: OT-DC-002, OT-DC-032, OT-DC-021 |
| [OT-DC-024](./ot-detection-catalog-by-log-source.html#OT-DC-024-logic) | Unapproved suppression of reporting or alarms | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0836-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0836-D01-logic) | Important process setting changed | Potential partial overlap; separate predicate validation required; candidates: OT-DC-045 |
| [LS-OT-T0836-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T0836-D02-logic) | Setting outside its allowed range | Potential partial overlap; separate predicate validation required; candidates: OT-DC-045 |
| [LS-OT-T0836-D03](./ot-detection-catalog-by-log-source.html#LS-OT-T0836-D03-logic) | Setting changes too much or too often | Potential partial overlap; separate predicate validation required; candidates: OT-DC-045 |
| [LS-OT-T0836-D04](./ot-detection-catalog-by-log-source.html#LS-OT-T0836-D04) | Setting changed at the wrong time | Blocked: detection logic and required evidence unspecified; candidates: OT-DC-045 |
| [LS-OT-T0836-D05](./ot-detection-catalog-by-log-source.html#LS-OT-T0836-D05-logic) | Many sensitive settings changed quickly | Potential partial overlap; separate predicate validation required; candidates: OT-DC-045 |
| [OT-DC-045](./ot-detection-catalog-by-log-source.html#OT-DC-045-logic) | Setpoint outside approved range or rate of change | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0843-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0843-D01-logic) | Program transfer from an unapproved source | Potential partial overlap; separate predicate validation required; candidates: OT-DC-032 |
| [LS-OT-T0843-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T0843-D02-logic) | Program transfer outside maintenance hours | Potential partial overlap; separate predicate validation required; candidates: OT-DC-032 |
| [LS-OT-T0843-D03](./ot-detection-catalog-by-log-source.html#LS-OT-T0843-D03-logic) | Full download in an unexpected controller state | Potential partial overlap; separate predicate validation required; candidates: OT-DC-032 |
| [LS-OT-T0843-D05](./ot-detection-catalog-by-log-source.html#LS-OT-T0843-D05-logic) | Repeated failed program changes | Potential partial overlap; separate predicate validation required; candidates: OT-DC-032 |
| [LS-OT-T0843-D06](./ot-detection-catalog-by-log-source.html#LS-OT-T0843-D06-logic) | Mode change followed by a program change | Potential partial overlap; separate predicate validation required; candidates: OT-DC-032 |
| [OT-DC-032](./ot-detection-catalog-by-log-source.html#OT-DC-032-logic) | Unapproved controller program download or online edit | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0858-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0858-D01-logic) | Mode change from an unapproved source | Potential partial overlap; separate predicate validation required; candidates: OT-DC-021 |
| [LS-OT-T0858-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T0858-D02-logic) | Mode change outside maintenance hours | Potential partial overlap; separate predicate validation required; candidates: OT-DC-021 |
| [LS-OT-T0858-D03](./ot-detection-catalog-by-log-source.html#LS-OT-T0858-D03-logic) | Controller leaves RUN while the process is active | Potential partial overlap; separate predicate validation required; candidates: OT-DC-021 |
| [LS-OT-T0858-D04](./ot-detection-catalog-by-log-source.html#LS-OT-T0858-D04-logic) | Mode change without an engineering session | Potential partial overlap; separate predicate validation required; candidates: OT-DC-021 |
| [LS-OT-T0858-D05](./ot-detection-catalog-by-log-source.html#LS-OT-T0858-D05-logic) | One source changes several controller modes | Potential partial overlap; separate predicate validation required; candidates: OT-DC-021 |
| [LS-OT-T0858-D06](./ot-detection-catalog-by-log-source.html#LS-OT-T0858-D06-logic) | Mode change followed by a program transfer | Potential partial overlap; separate predicate validation required; candidates: OT-DC-021 |
| [OT-DC-021](./ot-detection-catalog-by-log-source.html#OT-DC-021-logic) | Unapproved controller CPU operating-mode command | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-033](./ot-detection-catalog-by-log-source.html#OT-DC-033-logic) | Controller logic differs from an approved reference | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-034](./ot-detection-catalog-by-log-source.html#OT-DC-034-logic) | Unapproved firmware update, downgrade or integrity failure | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-035](./ot-detection-catalog-by-log-source.html#OT-DC-035-logic) | Unexpected firmware-update-mode activation | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-036](./ot-detection-catalog-by-log-source.html#OT-DC-036-logic) | Unapproved HMI project, screen or display configuration change | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-026](./ot-detection-catalog-by-log-source.html#OT-DC-026-logic) | Unexpected command fan-out across process areas or sites | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-042](./ot-detection-catalog-by-log-source.html#OT-DC-042-logic) | Unauthorized write or control action directed at SIS | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-044](./ot-detection-catalog-by-log-source.html#OT-DC-044-logic) | Unapproved forced I/O on a safety or process controller | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0832-D03](./ot-detection-catalog-by-log-source.html#LS-OT-T0832-D03-logic) | Display-to-process mapping changed without approval | Potential partial overlap; separate predicate validation required; candidates: OT-DC-036 |
| [LS-OT-T0838-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0838-D01-logic) | Alarm configuration changed without approval (title inferred from supplied logic) | Potential partial overlap; separate predicate validation required; candidates: OT-DC-037 |
| [OT-DC-037](./ot-detection-catalog-by-log-source.html#OT-DC-037-logic) | Alarm threshold or alarm-routing configuration changed without approval | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0878-D03](./ot-detection-catalog-by-log-source.html#LS-OT-T0878-D03-logic) | Alarm disabled or hidden | Potential partial overlap; separate predicate validation required; candidates: OT-DC-024, OT-DC-037 |
| [LS-OT-T0878-D05](./ot-detection-catalog-by-log-source.html#LS-OT-T0878-D05-logic) | Many alarms acknowledged or hidden | Potential partial overlap; separate predicate validation required; candidates: OT-DC-024, OT-DC-037 |
| [OT-DC-031](./ot-detection-catalog-by-log-source.html#OT-DC-031-logic) | Suspected reporting-message spoofing or replay | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-043](./ot-detection-catalog-by-log-source.html#OT-DC-043-logic) | Safety bypass, inhibit or override outside authorized scope | Standalone OT-DC design; no equivalence inferred |

### Stage 5: full entry list

| ID | Use case | Relationship / readiness |
|---|---|---|
| [LS-OT-T0871-D03](./ot-detection-catalog-by-log-source.html#LS-OT-T0871-D03-logic) | Unapproved API invocation has a corroborated effect | Distinct LS predicate; adjacent OT-DC designs only; candidates: OT-DC-027, OT-DC-077 |
| [LS-OT-T0830-D06](./ot-detection-catalog-by-log-source.html#LS-OT-T0830-D06-logic) | Wire command disagrees with trusted endpoint evidence | Distinct LS predicate; adjacent OT-DC designs only; candidates: OT-DC-031, OT-DC-070 |
| [LS-OT-T1691-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T1691-D01-logic) | Expected OT message missing on a healthy path | Potential partial overlap; separate predicate validation required; candidates: OT-DC-050, OT-DC-051 |
| [LS-OT-T1691-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T1691-D02-logic) | One OT message class is selectively blocked | Potential partial overlap; separate predicate validation required; candidates: OT-DC-024, OT-DC-051 |
| [OT-DC-070](./ot-detection-catalog-by-log-source.html#OT-DC-070-logic) | Correlated suspicious activity across IT, DMZ and OT | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0836-D06](./ot-detection-catalog-by-log-source.html#LS-OT-T0836-D06-logic) | Setting change followed by a process problem | Potential partial overlap; separate predicate validation required; candidates: OT-DC-045, OT-DC-046, OT-DC-070 |
| [LS-OT-T0831-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0831-D01-logic) | Unapproved control action changes the process | Potential partial overlap; separate predicate validation required; candidates: OT-DC-045, OT-DC-046, OT-DC-070 |
| [LS-OT-T0831-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T0831-D02-logic) | Attributable sequence manipulates physical control | Potential partial overlap; separate predicate validation required; candidates: OT-DC-045, OT-DC-046, OT-DC-070 |
| [LS-OT-T0848-D06](./ot-detection-catalog-by-log-source.html#LS-OT-T0848-D06-logic) | Unapproved master changes the process | Potential partial overlap; separate predicate validation required; candidates: OT-DC-008, OT-DC-080, OT-DC-046 |
| [OT-DC-046](./ot-detection-catalog-by-log-source.html#OT-DC-046-logic) | Process value outside its mode-specific operating envelope | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T0832-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T0832-D01-logic) | Operator value differs from independent process truth | Potential partial overlap; separate predicate validation required; candidates: OT-DC-036, OT-DC-050 |
| [LS-OT-T0832-D04](./ot-detection-catalog-by-log-source.html#LS-OT-T0832-D04-logic) | Operator display freezes while the process changes | Potential partial overlap; separate predicate validation required; candidates: OT-DC-036, OT-DC-050 |
| [LS-OT-T0838-D03](./ot-detection-catalog-by-log-source.html#LS-OT-T0838-D03-logic) | Unapproved setting change prevents an expected alarm | Potential partial overlap; separate predicate validation required; candidates: OT-DC-037, OT-DC-048 |
| [OT-DC-050](./ot-detection-catalog-by-log-source.html#OT-DC-050-logic) | Frozen, stale or inconsistent process reporting | Standalone OT-DC design; no equivalence inferred |
| [LS-OT-T1695-D01](./ot-detection-catalog-by-log-source.html#LS-OT-T1695-D01-logic) | Operational communication medium disabled without approval | Distinct LS predicate; adjacent OT-DC designs only; candidates: OT-DC-012, OT-DC-051 |
| [LS-OT-T1695-D02](./ot-detection-catalog-by-log-source.html#LS-OT-T1695-D02-logic) | Communication medium lost while endpoints remain healthy | Distinct LS predicate; adjacent OT-DC designs only; candidates: OT-DC-012, OT-DC-051 |
| [OT-DC-047](./ot-detection-catalog-by-log-source.html#OT-DC-047-logic) | Safety margin approaching a trip threshold | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-048](./ot-detection-catalog-by-log-source.html#OT-DC-048-logic) | Unexpected trip or missing expected protective response | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-049](./ot-detection-catalog-by-log-source.html#OT-DC-049-logic) | Safety voting degradation or redundant sensor disagreement | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-051](./ot-detection-catalog-by-log-source.html#OT-DC-051-logic) | Loss of controller, SIS or remote-site telemetry | Standalone OT-DC design; no equivalence inferred |
| [OT-DC-065](./ot-detection-catalog-by-log-source.html#OT-DC-065-logic) | Network volume, connection rate or service-exhaustion anomaly | Standalone OT-DC design; no equivalence inferred |


Inventory association gaps: OT-DC-073 requires posture/advisory/change-register evidence; OT-DC-074 requires SIEM/SOAR/ticket delivery evidence. Neither has a source ID mapped in the current inventory. LS-OT-T0836-D04 also has no inventory source association and needs its specification completed.


