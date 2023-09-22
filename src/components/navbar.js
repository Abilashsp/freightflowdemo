import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Navbarlist from "./Navbarlist"


import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'


const navigation = [
   {
    name: 'List Of Forms',
    icon: FolderIcon,
   id:1, current: false,
    children: [
      {id:12, current: false, name: 'Booking Information', href: '/BookingManagement', },
      {id:12, current: false, name: 'PackagingSolutions', href: '/PackagingSolutions', },
      {id:12, current: false, name: 'TransportationServices', href: '/TransportationServices', },
      {id:12, current: false, name: 'Airport Security & Handling', href: '#', },
      {id:12, current: false, name: 'AirlineCoordination', href: '/AirlineCoordination', },
      {id:12, current: false, name: 'FlightandAirTransit', href: '/FlightandAirTransit', },
      {id:12, current: false, name: 'Customs & Arrival Services', href: '#', },
      
 
     
     

      
    ],
  },



  {
    name: 'Order Managment',
    icon: UsersIcon,
   id:1, current: false,
    abi:false,
    children: [
      {id:1, current: false, name: ' Customer Information', href:'order_management/customer_information',},
      {id:2, current: false, name: ' Tracking', href:'order_management/tracking'},
      {id:3, current: false, name: 'Modification', href: 'order_management/modification', },
      {id:4, current: false, name: ' History', href: 'order_management/history',  },
      {id:5, current: false, name: 'Approval', href: 'order_management/approval',  },
      {id:6, current: false, name: ' Reporting', href: 'order_management/reporting', },
      {id:7, current: false, name: 'Cancellation', href: 'order_management/cancellation',  },
      {id:8, current: false, name: 'Invoicing', href: 'order_management/invoicing',  },
      {id:9, current: false, name: 'Returns & Refunds', href: 'order_management/returns_refunds',  },
      {id:10, current: false, name: 'Integration', href: 'order_management/integration', },
      {id:11, current: false, name: 'Support', href: 'order_management/support', },
    ],
  },
  {
    name: '	Packaging Solutions',
    icon: FolderIcon,
   id:1, current: false,
    children: [
      {id:12, current: false, name: 'Standard Packaging Options', href: 'packing_solution/standard_packing_option', },
      {id:13, current: false, name: 'Specialized Packaging Options', href: 'packing_solution/speacilaized_packing_option',  },
      {id:14, current: false, name: 'Packaging Design & Customization', href: 'packing_solution/p_design_costomizede',  },
      {id:15, current: false, name: 'Packaging Compliance & Regulations', href: 'packing_solution/p_compliance_regulation',},
      {id:16, current: false, name: 'Packaging Cost Estimation', href: '	packing_solution/p_cost_estimation',  },
      {id:17, current: false, name: 'Packaging Tracking & Inventory', href: 'packing_solution/p_tracking_inventory',},
      {id:18, current: false, name: 'Packaging Sustainability Options', href: 'packing_solution/p_sustainability_option',},
      {id:19, current: false, name: 'Packaging Support & Consultation', href: 'packing_solution/p_support_consultation', },
    ],
  },
  {
    name: 'Transportation Services',
    icon: FolderIcon,
   id:1, current: false,
    children: [
      {id:20, current: false, name: 'Pickup Scheduling', href: 'transportation_services/picking_schedule',  },
      {id:21, current: false, name: 'Vehicle Selection & Management', href: '	transportation_services/vehicle_sel_managment',},
      {id:22, current: false, name: 'Route Planning & Optimization', href: '	transportation_services/route_planning_optim',  },
      {id:23, current: false, name: 'Real-Time Tracking & Monitoring', href: '	transportation_services/realtime_tra_monitor', },
      {id:24, current: false, name: 'Transportation Compliance', href: '	transportation_services/transportation_compliance copy',},
      {id:25, current: false, name: 'Specialized Transportation Options', href: 'transportation_services/specialized_tra_option', },
      {id:26, current: false, name: 'Transportation Cost Estimation', href: '	transportation_services/transportation_cost_estimation', },
      {id:27, current: false, name: 'Transportation Support & Assistance', href: 'transportation_services/transportation_support_asst', },
    ],
  },
  {
    name: '	Airport Security & Handling',
    icon: FolderIcon,
   id:1, current: false,
    children: [
      {id:28, current: false, name: 'Security Screening & Inspection', href: '	air_security_handling/security_screen_insp', },
      {id:29, current: false, name: 'Cargo Handling & Storage', href: '	air_security_handling/cargo_handle_storage',},
      {id:30, current: false, name: 'Customs Documentation & Clearance', href: '	air_security_handling/custom_docs_clerance', },
      {id:31, current: false, name: 'Specialized Handling Requirements', href: '	air_security_handling/specialized_han_requirement', },
      {id:32, current: false, name: 'Loading & Unloading Operations', href: '	air_security_handling/loading_unloading_operation',  },
      {id:33, current: false, name: 'Real-Time Monitoring & Tracking', href: '	air_security_handling/realtime_monitor_tra',},
      {id:34, current: false, name: 'Emergency Response & Contingency', href: '	air_security_handling/emergency_respon_contingency',  },
      {id:35, current: false, name: 'Coordination with Airlines & Agents', href: '	air_security_handling/cordination_airline_agent',  },
    ],
  },
  {
    name: '	Airline Coordination',
    icon: FolderIcon,
   id:1, current: false,
    children: [
      {id:36, current: false, name: 'Flight Scheduling & Booking', href: 'airline_coordination/flight_schedule_booking', },
      {id:37, current: false, name: 'Cargo Loading & Unloading Plans', href: '	airline_coordination/cargo_loading_unlo_plans', },
      {id:38, current: false, name: 'Real-Time Flight Tracking', href: '	airline_coordination/realtime_flight_tracking',  },
      {id:39, current: false, name: 'Airline Partnerships & Agreements', href: '	airline_coordination/airline_partn_agreemnet', },
      {id:40, current: false, name: 'Compliance & Regulatory Coordination', href: 'airline_coordination/complince_reg_coordination', },
      {id:41, current: false, name: 'Specialized Cargo Handling', href: '	airline_coordination/specialized_cargo_handling',  },
      {id:42 ,current: false, name: 'Communication & Collaboration Tools', href: '	airline_coordination/communication_coll_tools', },
      {id:43, current: false, name: 'Issue Resolution & Support', href: '	airline_coordination/issue_resolutin_support', },
    ],
  },
  {
    name: '	Flight & Air Transit',
    icon: FolderIcon,
   id:1, current: false,
    children: [
      {id:44, current: false, name: 'Flight Planning & Scheduling', href: '	flight_air_transit/flight_planning_scheduling',  },
      {id:45, current: false, name: 'In-Flight Cargo Monitoring', href: '	flight_air_transit/in_flight _cargo_monitoring',},
      {id:46, current: false, name: 'Transit & Layover Coordination', href: '	flight_air_transit/transit_layover_coordination',  },
      {id:47, current: false, name: 'Flight Crew Coordination', href: '	flight_air_transit/flight _crew_coordination',  },
      {id:48, current: false, name: 'Air Traffic Control Communication', href: '	flight_air_transit/air_traffic_control_communication', },
      {id:49, current: false, name: 'Emergency Procedures & Contingency', href: '	flight_air_transit/emergency _procedures_contingency',  },
      {id:50, current: false, name: 'Fuel Management & Efficiency', href: '	flight_air_transit/fuel_management_efficiency', },
      {id:51, current: false, name: 'Regulatory Compliance & Reporting', href: '	flight_air_transit/regulatory_compliance_reporting',  },
    ],
  },
  {
    name: 'Customs & Arrival Services',
    icon: FolderIcon,
   id:1, current: false,
    children: [
      {id:52, current: false, name: 'Customs Documentation & Clearance', href: '	customs_arrival_services/customs_documentation_clearance',  },
      {id:53, current: false, name: 'Import/Export Regulations', href: 'customs_arrival_services/import_export_regulations',  },
      {id:54, current: false, name: 'Inspection & Quarantine Services', href: '	customs_arrival_services/inspection_quarantine_services',  },
      {id:55, current: false, name: 'Arrival Coordination & Scheduling', href: '	customs_arrival_services/arrival_coordination_scheduling',  },
      {id:56, current: false, name: 'Specialized Handling Requirements', href: 'customs_arrival_services/specialized_handling_requirements',  },
      {id:57, current: false, name: 'Duty & Tax Calculation', href: '	customs_arrival_services/duty_tax_calculation', },
      {id:58, current: false, name: 'Brokerage & Agent Services', href: '	customs_arrival_services/brokerage_agent_services', },
      {id:59, current: false, name: 'Issue Resolution & Support', href: '	customs_arrival_services/issue_resolution_support', },
    ],
  },
  {
    name: 'Final Delivery & Destination',
    icon: FolderIcon,
   id:1, current: false,
    children: [
      {id:60, current: false, name: 'Delivery Scheduling & Coordination', href: 'final_delivery_destination/delivery_scheduling_coordination', },
      {id:61, current: false, name: 'Last-Mile Delivery Options', href: '	final_delivery_destination/last_mile_delivery_options',  },
      {id:62, current: false, name: 'Real-Time Tracking & Notifications', href: '	final_delivery_destination/real_time_tracking_notifications',  },
      {id:63, current: false, name: 'Specialized Handling & Requirements', href: '	final_delivery_destination/specialized_handling_requirements',  },
      {id:64, current: false, name: 'Proof of Delivery & Signatures', href: 'final_delivery_destination/proof_of_delivery_signatures',  },
      {id:65, current: false, name: 'Returns & Reverse Logistics', href: '	final_delivery_destination/returns_reverse_logistics',  },
      {id:66, current: false, name: 'Customer Support & Issue Resolution', href: '	final_delivery_destination/customer_support_issue_resolution',  },
      {id:67, current: false, name: 'Reporting & Analytics', href: '	final_delivery_destination/reporting_analytics',  },
    ],
  },
  {
    name: 'Tracking & Reporting',
    icon: FolderIcon,
   id:1, current: false,
    children: [
      {id:68, current: false, name: 'Real-Time Cargo Tracking', href: '	tracking_reporting/real_time_cargo_tracking', },
      {id:69, current: false, name: 'Performance Analytics & Metrics', href: '	tracking_reporting/performance_analytics_metrics', },
      {id:70, current: false, name: 'Customized Reporting & Dashboards', href: '	tracking_reporting/customized_reporting_dashboards', },
      {id:71, current: false, name: 'Alerts & Notifications', href: '	tracking_reporting/alerts_notifications', },
      {id:72, current: false, name: 'Compliance & Regulatory Reporting', href: 'tracking_reporting/complian_regulatory_reporting', },
      {id:73, current: false, name: 'Customer Access & Visibility', href: 'tracking_reporting/customer_access_visibility', },
      {id:74, current: false, name: 'Historical Data & Trend Analysis', href: 'tracking_reporting/historical_data_trend_analysis', },
      {id:75, current: false, name: 'Issue Tracking & Resolution', href: 'tracking_reporting/issue_tracking_resolution', },
    ],
  },
  {
    name: 'Customer Support',
    icon: FolderIcon,
   id:1, current: false,
    children: [
      {id:76, current: false, name: 'Inquiry & Request Handling', href: 'customer_support/inquiry_request_handling', },
      {id:77, current: false, name: 'Issue Resolution & Support', href: '	customer_support/issue_resolution_support', },
      {id:78, current: false, name: 'Tracking Assistance', href: '	customer_support/tracking_assistance', },
      {id:79, current: false, name: 'Feedback & Reviews', href: 'customer_support/feedback_reviews', },
      {id:80, current: false, name: 'Billing & Payment Support', href: '	customer_support/billing_payment_support', },
      {id:81, current: false, name: 'Specialized Services & Handling', href: 'customer_support/specialized_services_handling', },
      {id:82, current: false, name: 'Self-Service Tools & Resources', href: '	customer_support/self_service_tools_resources', },
      {id:83, current: false, name: 'Emergency & Critical Response', href: 'customer_support/emergency_critical_response', },
    ],
  },
  {
    name: 'Compliance & Quality',
    icon: FolderIcon,
   id:1, current: false,
    children: [
      {id:84, current: false, name: 'Regulatory Compliance', href: '	compliance_quality/regulatory_compliance', },
      {id:85, current: false, name: 'Quality Assurance & Control', href: '	compliance_quality/quality_assurance_control', },
      {id:86, current: false, name: 'Certification & Accreditation', href: '	compliance_quality/certification_accreditation', },
      {id:87, current: false, name: 'Risk Assessment & Management', href: 'compliance_quality/risk_assessment_management', },
      {id:88, current: false, name: 'Environmental & Sustainability', href: 'compliance_quality/environmental_sustainability', },
      {id:89, current: false, name: 'Health & Safety Regulations', href: 'compliance_quality/health_safety_regulations', },
      {id:90, current: false, name: 'Auditing & Monitoring', href: '	compliance_quality/auditing_monitoring', },
      {id:91, current: false, name: 'Training & Development', href: 'compliance_quality/training_development', },
    ],
  },
  {
    name: 'Documentation Management',
    icon: FolderIcon,
   id:1, current: false,
    children: [
      {id:92, current: false, name: 'Document Creation & Generation', href: 'documentation_management/doc_creation_generation', },
      {id:93, current: false, name: 'Document Storage & Archiving', href: 'documentation_management/doc_storage_archiving', },
      {id:94, current: false, name: 'Document Sharing & Collaboration', href: 'documentation_management/doc_sharing_collaboration', },
      {id:95, current: false, name: 'Document Tracking & Version Control', href: 'documentation_management/doc_tracking_version_control', },
      {id:96, current: false, name: 'Document Security & Access Control', href: 'documentation_management/doc_security_access_control', },
      {id:97, current: false, name: 'Document Approval & Workflow', href: '	documentation_management/doc_approval_workflow', },
      {id:98, current: false, name: 'Document Compliance & Regulations', href: 'documentation_management/doc_compliance_regulations', },
      {id:99, current: false, name: 'Document Reporting & Analytics', href: 'documentation_management/doc_reporting_analytics', },
    ],
  },
  {
    name: 'Warehousing Solutions',
    icon: FolderIcon,
   id:1, current: false,
    children: [
      {id:100, current: false, name: 'Inventory Management', href: 'warehousing_solutions/Inventory_management', childrens: [{ name: ' Inventory Overview', href: '	warehousing_solutions/Inventory_management/inventory_overview' }, { name: ' Stock Levels', href: 'warehousing_solutions/Inventory_management/stock_levels' }, { name: ' Inventory Adjustments', href: '	warehousing_solutions/Inventory_management/inventory_adjustments' }, { name: '  Product Catalog', href: 'warehousing_solutions/Inventory_management/product_catalog' }] },
      {id:101, current: false, name: 'Storage & Space Optimization', href: '	packaging_Solutions/sp_packing_option', childrens: [{ name: '  Space Layout Design', href: '	warehousing_solutions/storage_space_optimization/space_layout_design' }, { name: '  Storage Allocation', href: 'warehousing_solutions/storage_space_optimization/storage_allocation' }, { name: ' Capacity Planning', href: '	warehousing_solutions/storage_space_optimization/capacity_planning' }, { name: ' Space Utilization', href: 'warehousing_solutions/storage_space_optimization/space_utilization' },] },
      {id:102, current: false, name: 'Picking & Packing Operations', href: '	warehousing_solutions/picking_packing_operations', childrens: [{ name: ' Picking Lists', href: 'warehousing_solutions/picking_packing_operations/picking_lists' },{ name: '  Packing Instructions', href: '	warehousing_solutions/picking_packing_operations/packing_instructions' },{ name: '  Shipment Preparation', href: 'warehousing_solutions/picking_packing_operations/shipment_preparation' },{ name: ' Order Fulfillment', href: '	warehousing_solutions/picking_packing_operations/order_fulfillment' },] },
      {id:103, current: false, name: 'Receiving & Put-Away', href: 'warehousing_solutions/receiving_put_away', childrens: [{ name: ' Receiving Dashboard', href: 'warehousing_solutions/receiving_put_away/receiving_dashboard' },{ name: '  PutAway Guidelines', href: '	warehousing_solutions/receiving_put_away/putaway_guidelines' },{ name: ' Inspection Reports', href: 'warehousing_solutions/receiving_put_away/inspection_reports' },{ name: ' Inbound Scheduling', href: 'warehousing_solutions/receiving_put_away/inbound_scheduling' },] },
      {id:104, current: false, name: 'Cross-Docking & Transloading', href: '	warehousing_solutions/cross_docking_transloading', childrens: [{ name: ' CrossDocking Management', href: '	warehousing_solutions/cross_docking_transloading/crossDocking_management' },{ name: ' Transloading Operations', href: 'warehousing_solutions/cross_docking_transloading/transloading_operations' },{ name: ' Direct Transfer Scheduling', href: 'warehousing_solutions/cross_docking_transloading/direct_transfer_scheduling' },] },
      {id:105, current: false, name: 'Temperature & Climate Control', href: '	warehousing_solutions/temperature_climate_control', childrens: [{ name: ' Temperature Monitoring', href: 'warehousing_solutions/temperature_climate_control/temperature_monitoring' },{ name: ' Climate Settings', href: '	warehousing_solutions/temperature_climate_control/climate_settings' },{ name: ' Sensitive Goods Management', href: 'warehousing_solutions/temperature_climate_control/sensitive_goods_management' },] },
      {id:106, current: false, name: 'Security & Access Control', href: 'warehousing_solutions/security_access_control', childrens: [{ name: ' Security Protocols', href: 'warehousing_solutions/security_access_control/security_protocols' },{ name: ' Access Permissions', href: '	warehousing_solutions/security_access_control/access_permissions' },{ name: 'Surveillance Monitoring', href: 'warehousing_solutions/security_access_control/surveillance_monitoring' },{ name: 'Incident Reports', href: '	warehousing_solutions/security_access_control/incident_reports' }] },
      {id:107, current: false, name: 'Reporting & Analytics', href: '	warehousing_solutions/reporting_analytics', childrens: [{ name: ' Operational Reports', href: '	warehousing_solutions/reporting_analytics/operational_reports' },{ name: ' Performance Analytics', href: 'warehousing_solutions/reporting_analytics/performance_analytics' },{ name: ' Trend Analysis', href: '	warehousing_solutions/reporting_analytics/trend_analysis' },{ name: ' Custom Dashboards', href: '	warehousing_solutions/reporting_analytics/custom_dashboards' },] },
    ],
  }
 




]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const[idtrack,setidtrack]=useState(null);

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 max-w-xs h-full">
      <div className="flex h-16 shrink-0 items-center">
        <h1 className="text-xl font-extrabold leading-none tracking-tight text-gray-900  dark:text-white">Freight<mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Flow</mark> </h1>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <div

                      className={classNames(
                        item.id.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md p-2  leading-6 font-semibold text-gray-700 focus:bg-blue-500 '
                      )}
                    >
                      <item.icon className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                      < Link href={item.href}>{item.name} </Link>
                    </div>
                  ) : (
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.id.current ? 'bg-gray-50' : 'hover:bg-gray-50 ',
                              ' group flex items-center w-full text-left rounded-md p-2 gap-x-3 text-base leading-6 font-semibold text-gray-700 focus:bg-blue-500 '
                            )}
                          >
                            <item.icon className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                            {item.name}
                            <ChevronRightIcon
                              className={classNames(
                                open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                'ml-auto h-5 w-5 shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-2">
                            {item.children.map((subItem, index) => (
                      
                              <li key={subItem.id} >
                                 
                                < Navbarlist subItem={subItem} index={index} idtrack={idtrack} setidtrack={setidtrack}  />


                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}
