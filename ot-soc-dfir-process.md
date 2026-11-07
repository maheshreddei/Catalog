# Operational Technology Security Operations Center and Digital Forensics and Incident Response process

Building confidence at scale • Security Service operating procedure • Revision 1.1 • 06 November 2026

## Purpose and scope

Our catalog follows the attacker’s path into Operational Technology, the changes they attempt, and the operational consequences supported by evidence. It connects access activity, engineering changes and process observations so the Security Operations Center can explain what happened and recommend the next safe action.

Apply this procedure to cyber alerts, operator observations, process anomalies and technical failures at contracted customer sites. The complete 179-entry catalog remains the detection reference: 81 OT-DC designs, 86 LS-OT and 12 LS-ENT records. Overlapping records are not independent incidents. Use-case validation is assumed for planning; evidence availability and customer authority must still be established.

This is an Security Service procedure adapted from the supplied NISTIR 8428, June 2022, especially sections 3 and 4. It is not a verbatim NIST procedure, legal mandate or authorization to act on production systems. Phase labels A–F retain the publication’s structure. Local decision gates, forms and catalog examples are proposed adaptations. Page references below use printed report pages; add three for the PDF viewer page number.

## Incident flow at a glance

A. Routine and readiness → B. Initial identification and reporting → Joint SOC/operations assessment.

If evidence supports expected activity or a resolved technical issue: document the explanation, disposition and evidence, then return to routine. If unresolved: C. Technical event handling with focused Security Operations Center monitoring.

If suspicious or clearly cyber-related: expedite the customer situation assessment → D. Cyber incident analysis and response. Obvious cyber evidence does not wait for every troubleshooting step. Immediate safety concerns invoke existing facility emergency procedures in parallel; evidence collection must not delay necessary protection.

During D: authorized evidence collection → timely forensic analysis ⇄ coordinated response ⇄ recurring situation assessment. These are iterative activities, not a rigid sequence.

E. End-of-incident and recovery assessment → F. Supervised routine, deeper forensics and improvements → agreed exit to routine. Re-escalate when new evidence changes the assessment.

## 1. Roles, authority and handoff

| Role | Responsibility | Required handoff |
|---|---|---|
| Security Service Security Operations Center analyst / shift lead | Qualify alerts, preserve existing evidence, correlate context and maintain monitoring | Case record, source references, uncertainty and next investigation question |
| Facility Control Room / operators | Monitor the physical process; explain operating state, manual actions, alarms and protective responses | Process status, relevant logbook entries, observed consequence and operational owner |
| Facility Maintenance Team | Assess mechanical/electrical faults and record troubleshooting actions | Fault evidence, interventions, before/after state and possible evidence changes |
| Technical Support Team / control engineers | Inspect logic, Human–Machine Interface, network and device behavior with Security Operations Center support | Technical findings, approved changes, unresolved questions and draft situation report |
| Customer management / authorized incident authority | Declare incident status, activate Incident Response Team, approve operating-risk decisions and end active response | Recorded decision, scope, severity, authority, approved actions and next review |
| Incident Response Team incident lead | Coordinate handlers, investigation questions, response plan and shared timeline | Situation reports, evidence-based recommendations and task ownership |
| Digital Forensics and Incident Response data handler / evidence custodian | Collect with approved methods, track custody, preserve masters and examine copies | Acquisition manifest, hashes, tool details, access/transfer log and limitations |
| Security Service service owner | Maintain contracted boundaries, staffing, escalation and tenant isolation | Service escalation, resource requests and customer decision log |
| Original Equipment Manufacturer, Information Technology, safety, physical security, legal/compliance | Provide specialist support as applicable | Technical constraints, safety decisions, access and notification advice |

Multiple roles may be held by one person at smaller customers; name those people and a backup before an event. Distinguish the situation room, which coordinates decisions, from the isolated forensic lab, which performs analysis. Customer operations retains authority over physical-process actions. Pre-agreed delegated actions must be explicit, scoped and auditable.

## 2. A — Routine and forensic readiness

Reference: section 3; section 4.2.1, A.1–A.4, printed pp. 20–24.

PLAN: Maintain owned asset and conduit maps, including non-IP assets and IT/vendor interfaces. Preserve supported logs, selected network visibility, approved project/configuration baselines, historian data and facility event records. Baselines must reflect shift, operating mode, startup/shutdown, maintenance, commissioning and failover—not merely a single recent time window.

DECISION: Agree source coverage, collection methods, data retention, clock uncertainty, approved diagnostic tools, local collection capability, safe storage and who can authorize intrusive acquisition. Size Packet Capture retention and capture coverage to risk and capacity; continuous full capture everywhere is not assumed. Verify source health and the emergency contact route.

ACT: Security Operations Center maintains monitoring and collection; Facility Control Room maintains process monitoring and the operational logbook. Record manual changes, recipe changes, support work and planned outages. Keep approved reference copies separate from working systems. Use passive/least-intrusive methods first; active queries or device reads need a supported, assessed method and customer authorization.

Output: customer readiness pack, asset/process map, approved-access matrix, evidence-source inventory, operational baseline, response contacts and evidence-handling procedure.

Catalog examples: OT-DC-071 source/parser health; 072 clock drift/time-source changes; 074 escalation/evidence delivery; 007 inventory change; approved references supporting 033 and 039. These service-health cases support investigations and do not prove attacker activity.

## 3. B — Initial identification and reporting

Reference: section 4.2.2, B.1–B.6, printed pp. 25–30.

PLAN: Accept both entry paths: Security Operations Center alert/anomaly and Facility Control Room process alert/malfunction. Capture customer/site, event time and timezone, affected asset/process, symptom, source evidence, operating mode, recent changes and reporting person. Open an Security Service event record early to avoid lost observations; this local practice supplements NIST’s technical-support ticket step.

DECISION: Security Operations Center and FCR/FMT quickly compare cyber observations and field symptoms. Ask: Is there an immediate operational risk? Is there a supported technical explanation? Does approved work match the actor, target, operation and time? Are telemetry gaps or clock offsets undermining the conclusion? A new source or unusual hour alone does not prove compromise.

ACT: Preserve existing logs and captures before rollover. Security Operations Center performs focused packet/flow, file provenance and timeline checks; operators and maintenance assess the field state. Notify the counterpart through the agreed secure channel. Record all troubleshooting actions, especially resets, downloads or replacements that could alter evidence.

Gate B: If jointly explained and resolved, document evidence and residual concerns, then close or route to an operational problem record. If unexplained, disputed or needing engineering support, open/link the technical-support ticket and move to C. If credible cyber evidence is already present, request immediate situation assessment for D. Necessary safety actions proceed under facility authority without waiting for cyber certainty.

Output: qualified event, shared initial assessment, evidence pointers and explicit disposition. “No observed impact” and “impact not observable” are different outcomes.

## 4. C — Technical event handling

Reference: section 4.2.3, C.1–C.7, printed pp. 30–34.

PLAN: TST/control engineering owns technical inspection; Security Operations Center provides focused monitoring. Agree the inspection scope and record tools, connections and planned changes. A support action may generate the same alert as suspicious engineering activity; annotate it without erasing the event.

DECISION: Assess technical fault, approved activity, policy violation and suspected cyber explanations together. Strong cyber evidence can bypass extended troubleshooting. Otherwise compare field faults, network dependencies, project/configuration changes and corresponding process observations. Lack of a technical explanation does not itself confirm an attack.

ACT: Preserve relevant pre-change data where safe. Maintain a shared timeline of engineering actions and cyber findings. Technical Support Team prepares a short fact-based draft: chronology, inspection results, cyber observations, affected scope, current risks and unresolved questions. Escalate to customer management when suspicion persists or the teams cannot agree.

Gate C: Supported technical issue → Technical Support Team remedy and Security Operations Center confirmation → documented closure. Unusual/unresolved event → customer situation assessment → continue technical inspection or declare suspected cyber incident and activate D. Record the reason and next review; do not let an unresolved case disappear into the technical queue.

## 5. D — Cyber incident analysis and response

Reference: section 4.2.4, D.1–D.9, printed pp. 34–48.

PLAN: Customer authority activates the Incident Response Team, names the incident lead and evidence custodian, sets scope and communication channels, and records incident status and severity. Define priority questions: entry path, affected assets, ongoing spread, engineering/control actions, observed process effects and safe response options.

DECISION: Assess operational consequence separately from confidence in malicious activity. A potentially serious safety event may require urgent escalation while cyber confidence is low. Preserve a suspected status until evidence supports confirmation. Review customer dependencies, backups, available specialists, local access and evidence likely to disappear.

ACT: Run three coordinated tracks: (1) authorized supplementary acquisition; (2) timely forensic analysis answering current decisions; (3) approved containment, eradication and recovery. Preserve event-time evidence and the record of response-induced changes. Reassess after significant findings, spread, safety changes or response actions. Select review intervals and service targets with the customer rather than inventing universal deadlines.

Communicate what is known, unknown, affected and recommended, with the decision-maker and next update. Formal incident declarations and external notifications are made by authorized customer roles with legal/regulatory input. Security Service cross-customer hunting uses authorized, sanitized indicators or patterns; customer evidence is not shared across tenants by default.

Exit gate D: Customer authority decides when to end active response based on risk, control of the facility, spread, recovery readiness and documented residual issues. Ending active response does not prove complete eradication or finish every forensic question.

## 6. Evidence acquisition and chain of custody

Reference: A.2 and D.4, particularly printed pp. 22–23 and 36–39; section 3.2 for the lab.

Prioritize by safety, investigative value, volatility, loss/overwrite risk, collection effort and device constraints. There is no universal instruction to collect controller memory first. Before acquisition, record authorization, asset, method, expected operational effect, tool/version, operator witness where available and fallback/abort conditions. Use tools assessed for the relevant device and environment.

| Evidence | Collect/preserve where supported | Interpretation and handling |
|---|---|---|
| Access and identity | VPN/PAM/jump sessions, target authentication, Multi-Factor Authentication result, NAT/lease mappings, account roles | Preserve early where rotation/tampering is possible; bind identity using session evidence, not Internet Protocol alone |
| Network | Existing PCAP/flow, sensor metadata, firewall events, control protocol operations and native responses | Record sensor location, capture gaps, direction, encrypted visibility limits and request/result semantics |
| Engineering | Programming audit, project files, version references, downloads, mode history, force/bypass tables | Use approved exports or existing copies first; device upload/readback may affect the system and needs assessment |
| Host | Relevant event logs, process/file/service evidence, supported memory or disk acquisition | Record collection changes and tool limitations; memory capture, imaging and reboot require a safe method |
| Process and field | Historian values with units, quality/source timestamps, alarm/SIS sequence of events, local diagnostics and operator logbook | Check common upstream dependencies before treating a second display/historian as independent truth |
| Physical/context | Authorized photographs, device indicator state, maintenance/permit/change records, manual interventions | Record observer, time uncertainty, location and source; minimize unrelated sensitive information |

For each item record: case/customer/site, evidence ID, source asset, description and scope, native event time/timezone, acquisition start/end, known clock offset, collector, authority, method/tool/version, format/size, cryptographic digest (for example SHA-256), storage location and restrictions. Every transfer records from/to person, timestamp, purpose and verification result. Protect the original/master and analyze verified working copies. Hashes demonstrate consistency of acquired bytes, not that the source device’s claims are true.

Keep customer evidence isolated, access-controlled and encrypted as appropriate; separate evidence manifests and integrity records from the working analysis. Use approved secure transfer and preserve a receipt. Retention, evidence hold, release and disposal follow customer policy and applicable obligations; do not automatically delete at ticket closure. If safety or restoration prevents collection, record what was not collected, who decided, why and the resulting investigation limitation.

## 7. Reconstruct the attacker path and operational consequence

Reference: D.5, printed pp. 39–45; catalog relationships below are local investigation examples.

| Investigation layer | Questions and supporting evidence | Example catalog pivots |
|---|---|---|
| Access activity | Who reached which asset, through what approved or unexpected route? VPN/PAM, jump/target audit, identity roles and network evidence | 001, 002, 003, 004, 005; LS-OT-T0859 and T0886 predicates |
| Reach and discovery | What other assets were contacted? Does the source have an authorized control role? | 008, 013–017, 079, 080; applicable LS discovery/master predicates |
| Engineering/control changes | What operation was attempted, accepted or independently confirmed? Compare native results and approved projects/changes | 019–045 as applicable; LS-OT-T0843, T0858, T0836 and T1692.001 predicates |
| Operational evidence | Did process state, reporting, control, alarms, safety response or availability change? Test against operating mode, quality and field observations | 046–051, 065; applicable LS reporting, alarm and availability predicates |
| Episode correlation | Do asset/session/operation identifiers and timing support one causal episode? What links remain hypotheses? | 070 plus component records; do not count every packet as a separate incident |

Use the evidence ladder: request observed → native acceptance/result → confirmed configuration/logic/state change → independently supported process consequence. Not every incident traverses every rung; malicious access, failed manipulation or disruption without a programming change can still matter. Baseline deviation, policy violation, suspected maliciousness and demonstrated impact are separate assessments.

Timely analysis uses baseline comparison, file/project differences, sessions, protocol semantics and process context to inform the next decision. Analyze suspected files on copies in an isolated lab. Deeper reverse engineering can continue later; do not delay essential safe response until attribution or full malware understanding is complete.

## 8. Reduce false positives with evidence, not blanket suppression

Known/normal describes observed history; approved describes policy. A common activity can be unauthorized, and a rare activity can be legitimate. For each alert evaluate the full tuple: actor/role, source, route, target, operation/object, outcome, time, operating mode and approval scope. Maintain baseline provenance and version; never automatically learn incident activity as normal.

| Disposition | Evidence needed | Security Operations Center action |
|---|---|---|
| Expected and authorized | Exact scoped approval and matching observed behavior | Record explanation; retain action evidence and any required audit notification |
| Technical fault | Supported fault mechanism, operator/engineering agreement and no unresolved contradictory cyber evidence | Link repair record and preserve the reasoning; reopen if new evidence appears |
| Policy violation | Defined policy and attributable deviation | Route to owner; investigate consequence and intent without declaring an attack automatically |
| Suspected cyber incident | Corroborated suspicious behavior or significant unresolved evidence | Escalate for customer situation assessment and Incident Response Team activation |
| Inconclusive | Missing observations, unknown policy, timing gaps or unsupported device semantics | Request specific evidence, record visibility/risk owner and set next review |

An approval explains only its scoped actions. Do not suppress an entire host or maintenance window. Some catalog predicates intentionally record every critical-object write or alarm action; preserve that meaning and add operational context. A source outage is a visibility issue, not evidence that the process is safe.

## 9. Response, recovery and supervised routine

Reference: D.6–D.9 and sections 4.2.5–4.2.6, printed pp. 45–53.

For each proposed response record objective, evidence/rationale, affected assets and dependencies, expected process effect, authority, executor, implementation window, verification and rollback/abort criteria. Candidate actions include restricting an access path, controlling remote support, restoring approved host/project configurations or replacing affected equipment. Selection is incident-specific and requires engineering/operations coordination; these examples are not executable instructions.

Before reintroducing service, verify the approved recovery source, configuration/logic and relevant security changes, control dependencies, operator visibility, alarms and safety functions using the customer’s acceptance procedure. Do not infer safe recovery solely from disappearance of alerts. Unproven backup integrity or unresolved process behavior requires an explicit risk decision.

E — End of incident: customer authority records the end-of-response decision, current status, residual risks, recovery assessment and responsibilities. Incident Response Team completes the report and lessons learned; preserve links between the Security Service case, customer operational records and continuing forensic work.

F — Supervised routine: agree enhanced Security Operations Center and Facility Control Room monitoring, named tasks, observation scope, review dates, recurrence triggers and exit criteria. No fixed universal duration is assumed. New suspicious activity or instability reopens assessment. Advanced forensics proceeds in isolation as needed; recommendations and lessons feed the catalog, baselines, procedures and training. The supervised-routine exit is a recorded customer decision.

## 10. Case, situation report and forensic report templates

Initial case: customer/site; case ID; detection IDs/rule versions; time window/timezone; reporter; asset/process roles; symptoms; source references; operating mode; recent approved work; immediate operational concern; confidence and gaps; owner and next update.

Situation report: current status and severity; supported timeline; access path; attempted/confirmed changes; affected assets/dependencies; observed versus potential consequences; current technical/process state; completed actions; outstanding evidence; options and tradeoffs; decision needed; customer authority; next review.

Evidence register: evidence ID; case/customer/site; source asset; acquisition scope/time/method; collector/authorization; tool/version; digest; original and working-copy locations; restrictions; transfer and examination history; integrity checks; limitations; retention/hold status.

Action log: decision/action ID; timestamp/timezone; proposer and approver; rationale; exact scope; executor; expected effect; actual result; evidence altered/lost; verification; rollback; linked incident/change record.

Final report: what happened; how it happened; affected assets/process; supported timeline and evidence IDs; operational consequence and uncertainty; alternative explanations tested; acquisition/analysis methods and limitations; response/recovery decisions; unresolved questions; residual risk acceptance; supervised-routine plan; improvement owners and dates. Distinguish facts, assessment and recommendations throughout.

## 11. Example walkthrough and Security Service handoff

Synthetic example: 001 reports an out-of-scope remote session; 032 reports a program action; 021 reports a controller mode event. Security Operations Center preserves access and programming evidence and asks Facility Control Room about operating mode and planned work. Engineering checks the maintenance scope, device outcome and approved project. The team does not infer that the remote user performed the change until session/asset/action evidence supports that link.

If a matching approved job explains all observations, record the explanation. If changes exceed the job or contradictory evidence persists, request situation assessment and Incident Response Team activation. Preserve relevant project/audit data through the approved method; compare independent process observations before claiming physical impact. Customer authority selects response and recovery. Security Operations Center and Facility Control Room then monitor the agreed supervised routine.

At every shift or team transfer record: case/status; customer decision-maker; current asset/process state; evidence location and custody; confirmed facts versus hypotheses; response actions; pending decisions; next tasks/owners; deadlines and next update. Customer non-response follows the contracted escalation ladder; it does not expand Security Service authority.

## 12. Service assurance and improvement

Review source gaps, mutual SOC/FCR notification, time to joint assessment, preservation before destructive changes where safe, custody completeness, explanation quality, disposition changes, escalation performance and supervised-routine task completion. Use customer-agreed targets; high alert volume or ATT&CK mapping count alone is not success.

Maintain the customer annex: contacts/delegation; severity and response targets; evidence/retention policy; tools and device constraints; supported acquisition methods; emergency procedures; process-specific recovery criteria; communication recipients; reporting obligations; security service/OEM access boundaries. All operational steps inherit these site constraints.

## Source traceability

Primary source: supplied NISTIR 8428, Digital Forensics and Incident Response Framework for Operational Technology, June 2022, 61 PDF pages. Official identifier: https://doi.org/10.6028/NIST.IR.8428.

Section 2: OT-specific coordination, faults versus attacks, availability/forensics tradeoffs. Section 3: team, toolkit, situation room, lab and field readiness. Section 4.1/Figures 2–3: phase and escalation model. Sections 4.2.1–4.2.6: A–F workflow. Appendix B: smaller-organization adaptation. The 2022 report’s historical bibliography is not treated as proof that its cited revisions are current.

Companion documents: Operational Technology Security Service Plan–Decision–Act; full 179-entry catalog roadmap; current by-log-source detection catalog. NIST does not prescribe the local catalog IDs, severity labels, customer service targets or forms used here.

