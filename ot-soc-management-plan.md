# OT SOC implementation plan for management

Prepared 2026-11-05. Scope: all 179 records in the updated OT Detection Catalog (81 OT-DC, 86 LS-OT, 12 LS-ENT). These records include overlapping predicates and service-assurance/posture workflows; they are not 179 independent production rules. Deployment and site validation remain unverified.

## Management proposal

Approve a 90-day first-site pilot to establish reliable visibility, detect unauthorized access and changes, and prove that the SOC can explain an incident and coordinate a safe next action. Use the full catalog as the controlled backlog. Expand by customer/site readiness and operational consequence.

The 90-day schedule and selected catalog entries are proposed delivery choices, not prescribed by NIST, CISA or IEC. Start engineering/SIS detections earlier where risk and supported telemetry justify it.

## How the guidance informs the plan

| Guidance | Published scope or recommendation | Proposed application |
|---|---|---|
| [NIST CSF 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf) | Six functions and Current/Target Profiles organize cybersecurity outcomes | Record today's visibility and response gaps; define the target OT SOC capability, ownership and evidence |
| [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final) | OT guidance accounts for safety, performance and reliability; network monitoring includes baselining and analysis | Use operational context, approved collection and safe investigation; do not infer maliciousness from every anomaly |
| [CISA-led joint OT inventory guidance](https://www.cyber.gov.au/publication/foundations-for-ot-cybersecurity-asset-inventory-guidance-for-owners-and-operators) | Develop and maintain inventory and taxonomy using asset function, criticality and dependencies | Establish customer/site, asset roles, owners, protocols, criticality and connectivity before applying policy detections |
| [CISA and partners: event logging guidance](https://www.cyber.gov.au/publication/best-practices-for-event-logging-and-threat-detection) | Establish logging policy, quality, centralized analysis and protected log storage | Define sources, required fields, time handling, retention, access, ingestion health and investigation retrieval |
| [IEC 62443-2-1:2024](https://webstore.iec.ch/en/publication/62883) | Asset-owner security program policy and procedures | Customer retains operational accountability; document risk ownership, maintenance exceptions and incident decisions |
| [IEC 62443-2-4:2023](https://webstore.iec.ch/en/publication/67631) | Service-provider security processes for integration and maintenance | Assess applicability to contracted security service activities; define responsibilities, approved access and service changes |
| [IEC 62443-3-2:2020](https://webstore.iec.ch/en/publication/30727) | Define the system, zones/conduits, assess risk and document security requirements | Choose pilot boundaries and monitoring points according to consequential access paths |
| [IEC 62443-3-3:2013](https://webstore.iec.ch/en/publication/7033) | Technical system requirements across seven foundational requirements | Relate detection evidence to identity/use control, integrity, data-flow restrictions, timely response and availability |

This is a thematic alignment based on official public guidance and IEC descriptions/previews. It is not a clause-by-clause conformity assessment, certification, or claim of an achieved security level. Such assessment requires the applicable full standards, defined scope and implementation evidence. MITRE ATT&CK supplies behavior traceability separately from these program/control objectives.

## First 90 days

| Period | Work | Catalog scope | Exit evidence |
|---|---|---|---|
| Days 1–15 | Define customer/site and critical process scope; assign owners; review architecture, assets, vendors and access paths; approve collection design and response authority | Assess applicability for all 179; prioritize Stage 0 | Signed scope, initial Current/Target Profile, prioritized risks, asset/conduit map, RACI, collection and retention decisions |
| Days 16–30 | Onboard required pilot logs; verify parsing and identity/asset joins; baseline relevant shifts, maintenance and operating modes | OT-DC-071, 072, 074 | Evidence-health reports, timestamp uncertainty, tested alert delivery, approved access policy and documented gaps |
| Days 31–60 | Implement and safely validate pilot predicates; operate in shadow and tune with customer operations | Stage 1: 10 OT-DC + 12 LS-OT + 2 LS-ENT | Versioned queries, positive/negative test evidence, preserved request/outcome semantics, tuning and analyst runbooks |
| Days 61–90 | Exercise SOC-to-operations escalation, review shadow results, approve applicable cases and begin limited production | Applicable Stage 1 cases; early 032/021 where ready | Customer acceptance, measured workload/delay, coverage gaps, rollback plan and next-stage funding decision |

A date does not substitute for a readiness gate. Extend baselining if the pilot has not seen representative operating modes or maintenance. Validate via approved offline data, replay in a safe environment or existing records; no live exploitation, password testing or controller-command injection is authorized by this plan.

## Exactly which pilot entries

Stage 0: OT-DC-071 telemetry/parser health; OT-DC-072 clock integrity; OT-DC-074 escalation/evidence delivery.

Stage 1 OT-DC: 001 external remote access; 002 internal remote pairing; 003 authentication attacks; 004 dormant/shared account use; 005 conduit bypass; 007 unauthorized device; 009 outbound connections; 012 weakened security policy; 013 scanning; 060 log tampering.

Stage 1 LS-OT: T0859 D01–D08 (account-access predicates); T0886 D01–D02 (remote-access predicates); T0846 D01–D02 (device/port scanning). Full identifiers use the LS-OT- prefix, e.g. LS-OT-T0859-D01.

Stage 1 LS-ENT: LS-ENT-T1110.001-D01 and D02 (guessing attempts and subsequent successful authentication).

The 24 Stage 1 records require separate predicate acceptance evidence. Implementations may share processing and incidents may group related signals. Optional early engineering track: OT-DC-032 with LS-OT-T0843-D01/D02, and OT-DC-021 with LS-OT-T0858-D01/D02; assess their own source prerequisites before promotion.

## What must be provided

| Requirement | Minimum deliverable | Responsible role |
|---|---|---|
| Operational scope | Named sites, critical processes, system boundaries, service hours, escalation authority and sector obligations | Sponsor and customer OT owner |
| Asset and access context | Stable customer/site/asset IDs, roles, zones, conduits, NAT mapping, approved accounts, vendor windows and emergency access | OT network/control engineering and IAM |
| Pilot evidence | Firewall, VPN/PAM, jump-host and target authentication, relevant identity/application/endpoint audit, passive inventory and SIEM/collector/ticket health | Source owners and SOC platform engineer |
| Secure collection | Approved sensor/collector placement; controlled forwarding through appropriate boundaries; buffering, capacity, storage access and retention | OT architect and SOC platform engineer |
| Detection implementation | Named SIEM dialect, versioned query, fields/joins, outcome semantics, policy inputs, exceptions, tests and rollback | Detection engineer |
| Analyst response | Runbooks, evidence retrieval, severity criteria, OT on-call contacts, decision authority and handover exercise | SOC lead, incident lead and customer operations |
| Engineering expansion | Programming/controller audit, approved projects, tag maps, maintenance/change records; SIS/process evidence as applicable | Control/SIS/process engineers |
| security service isolation | Tenant-scoped joins, access controls, customer-specific policy and evidence storage/handling | security service architect and service owner |

Inventory-listed sources are candidate sources, not proof of successful ingestion or field availability. Do not install unsupported agents on controllers or create unrestricted SOC-to-control access. Missing logs should become explicit coverage gaps.

## Staffing and budget decision

Assign an accountable sponsor, SOC service lead, detection engineer, SIEM/data engineer, OT network/control-engineering counterpart and customer operations/on-call owner. Engage identity/endpoint, safety/process and incident-response specialists when applicable. These are required functions, not assumed full-time headcounts. Size staffed coverage from service hours, tenant/site count, measured alert workload, investigation time, leave and escalation obligations.

Budget for approved passive visibility where absent, collectors, ingestion/storage/retention, engineering integration, safe validation capability, analyst training and operations participation. Estimate volume and cost from sampled source rates before committing to full ingestion. Define evidence residency, access and retention per customer contract and applicable requirements.

## Acceptance and management measures

For every promoted predicate, require an accountable owner, evidenced required fields, attributable source/target and time, documented operational policy, safe tests of triggering and authorized-lookalike behavior, missing/delayed-event handling, tenant isolation, a runbook, escalation and customer acceptance.

Report:
- Visibility: in-scope critical assets and sources actually observable, with measured evidence quality and gaps.
- Delivery: applicable / designed / implemented / offline-validated / shadow / customer-accepted / production counts, separately for catalog records and deployed rules.
- Quality: actionable-alert proportion, authorized-activity noise, investigation effort and ingest-to-alert delay; targets agreed from the baseline and customer consequence.
- Confidence: proportion of reviewed incidents with evidence for what/how/affected/next, missing observations and alternative explanations.
- Service: tested delivery/acknowledgment, escalation performance, evidence retrieval and outstanding readiness blockers.

Do not use alerts generated, ATT&CK mappings, or total catalog size as standalone success measures. Customer operations authorizes actions that may affect physical processes; initial automation can enrich, preserve evidence and route tickets within the agreed service scope.

## Expansion after the pilot

Use [the full 179-entry roadmap](./ot-full-catalog-roadmap.html) for Stages 2–5 and retain applicability decisions for every entry. Progress host/identity coverage, industrial protocols, engineering/SIS changes and process correlation as their dependencies become ready. For airports emphasize relevant facilities/baggage control; aviation/MRO needs an explicit facilities versus aircraft scope; petrochemical needs DCS/SIS and permit context; gas distribution needs remote-station availability and actual deployed SCADA protocols.

Maintain a shared detection core plus sector context and customer/site policy. Validate one representative site per sector before broad scaling. Stage 6 is sustained service review, revalidation after changes and controlled improvement.

Known backlog blockers: LS-OT-T0836-D04 lacks supplied logic; OT-DC-073 and OT-DC-074 lack current inventory source-ID associations. These gaps remain visible and are not treated as production coverage.

## Management approval requested

Approve the pilot site and scope, named owners and operations participation, collection/data budget, validation resources, service hours and escalation authority, and production acceptance criteria. At Day 90 decide on evidence: promote ready detections, remediate gaps, and authorize the next sector/site wave.

