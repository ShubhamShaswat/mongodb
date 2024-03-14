// -------------------------------------- User Schema ------------------------------------
const userSchema = {
  firstName: 'string',
  lastName: 'string',
  role: 'string', // enum = [PROJECT_OWNER, CONSULTANT, AUDITOR]   // SUPER_ADMIN will be created by script for security concern
  email: 'string', // index
  timezone: 'string',
  status: 'string', // enum = [ACTIVE, PENDING], default = PENDING
  inviteSent: 'integer', // max = 3, default = 0
  accountId: 'string', // index
  avatar: 'profile image url',
  'password or token': 'string',
  createdAt: 'Date', // default= Date.now()
  updatedAt: 'Date', // default= Date.now()
};

// ------------------------------------- Accounts Schema ---------------------------------------
const accountsSchema = {}; // waiting for Product Team to update flow

// -------------------------------------- Project Schema ------------------------------------
const projectSchema = {
  accountId: 'string', // compound index with createdAt    {accountId: 1, createdAt: -1}
  name: 'string',
  type: 'string', // not clear
  subType: 'string',
  country: {
    name: 'string',
    isoName2: 'string',
  },
  portfolioOwner: {
    _id: 'objectId',
    name: 'string',
  },
  assetOwner: 'Array', // not clear from business side
  verifier: 'string',
  plantName: 'string',
  capacity: 'integer',
  plantLocation: 'string',
  coordinates: 'string',
  projectOwnerName: 'string', // not clear
  projectType: 'string', // enum = [Standalone, Bundled]
  renewableType: 'string', // enum = [Solar, Wind, Other]
  commissionedDate: 'Date',
  interConnection: 'string', // enum = [Grid, Captive]
  plantLife: 'integer',
  equipments: 'string',
  creditingPeriodStartDate: 'Date',
  creditingPeriodEndDate: 'Date',
  methodology: 'string',
  emissionFactor: 'float',
  degradationFactor: 'string',
  eventsChronology: 'string', // not clear
  cost: 'integer',
  tariffCost: 'integer',
  meter: 'Array Object',
  localStakeholder: [
    {
      name: 'string',
      contactNumber: 'string',
      emailId: 'string',
    },
  ],
  projectOwner: [
    {
      name: 'string',
      contactNumber: 'string',
      emailId: 'string',
    },
  ],
  status: 'string', // enum = [Verified, Pending, Queries Raised]      // default = Pending
  createdAt: 'Date', // default= Date.now()                              // compound index with accountId
  updatedAt: 'Date', // default= Date.now()
};

// ------------------------------------- Country Schema ---------------------------------------
const countrySchema = {
  name: 'string', // index         {name: 1, iso3Name: -1}
  iso2Name: 'string',
  iso3Name: 'string', // index
};

// ------------------------------------- Monitoring Report Schema ---------------------------------------
const monitoringReportSchema = {
  projectId: 'objectId', // compound index with createdAt     {projectId: 1, createdAt: -1}
  startDate: 'Date',
  endDate: 'Date',
  emissionReduction: 'integer',
  reportUrl: 'string',
  mrGeneratedDate: 'Date',
  status: 'string', // enum = [Verified, Under Review]                // default = Under Review
  createdAt: 'Date', // default= Date.now()   // compound index with projectId
  updatedAt: 'Date', // default= Date.now()
};

// ------------------------------------- Commission Certificate Schema ---------------------------------------
const commissionCertificateSchema = {
  dateOfCommission: 'Date',
  monitoringStartDate: 'Date',
  monitoringEndDate: 'Date',
  monitoringId: 'Integer', // index
  capacity: 'integer',
  certificateUrl: 'string',
  createdAt: 'Date', // index   default= Date.now()    // compound index  {monitoringId: 1, createdAt: -1}
};

// ------------------------------------- Site Details Schema ---------------------------------------
const siteSchemas = {
  monitoringStartDate: 'Date',
  monitoringEndDate: 'Date',
  monitoringId: 'Integer', // index
  imageUrl: 'string',
  createdAt: 'Date', // index   default= Date.now()   // compound index  {monitoringId: 1, createdAt: -1}
};

// ------------------------------------- Main Meter Details Schema ---------------------------------------
const mainMeterSchemas = {
  monitoringStartDate: 'Date',
  monitoringEndDate: 'Date',
  monitoringId: 'Integer', // index
  imageUrl: 'string',
  createdAt: 'Date', // index   default= Date.now()   // compound index  {monitoringId: 1, createdAt: -1}
};

// ------------------------------------- Check Meter Details Schema ---------------------------------------
const checkMeterSchemas = {
  monitoringStartDate: 'Date',
  monitoringEndDate: 'Date',
  monitoringId: 'Integer', // index
  imageUrl: 'string',
  createdAt: 'Date', // index   default= Date.now()   // compound index  {monitoringId: 1, createdAt: -1}
};

// ------------------------------------- SDG Report Details Schema ---------------------------------------
const SDGReportSchemas = {
  monitoringStartDate: 'Date',
  monitoringEndDate: 'Date',
  monitoringId: 'Integer', // index
  imageUrl: 'string',
  createdAt: 'Date', // index   default= Date.now()   // compound index  {monitoringId: 1, createdAt: -1}
};

// ------------------------------------- Energy Details Schema / JMR ---------------------------------------
const energyDetailsSchema = {
  monitoringId: 'objectId', // compound index with createdAt     {monitoringId: 1, createdAt: -1}
  jmrStartDate: 'Date',
  jmrEndDate: 'Date',
  monitoringStartDate: 'Date',
  monitoringEndDate: 'Date',
  emissionGenerated: 'integer',
  baselineEmission: 'integer',
  emissionReduction: 'integer',
  jmrUrl: 'string',
  jmrGeneratedDate: 'Date',
  createdAt: 'Date', // default= Date.now()   // compound index with projectId
  updatedAt: 'Date', // default= Date.now()
};


// ------------------------------------- Invoices Schema ---------------------------------------
const invoicesSchema = {
  dateOfInvoice: 'Date',
  monitoringStartDate: 'Date',
  monitoringEndDate: 'Date',
  meterSerialNo: 'integer',
  monitoringId: 'Integer', // index
  certificateUrl: 'string',
  createdAt: 'Date', // index   default= Date.now()  // compound index  {monitoringId: 1, createdAt: -1}
};

// ------------------------------------- Calibration Certificate Schema ---------------------------------------
const calibrationCertificateSchema = {
  dateOfCalibration: 'Date',
  monitoringStartDate: 'Date',
  monitoringEndDate: 'Date',
  meterSerialNo: 'integer',
  monitoringId: 'Integer', // index
  certificateUrl: 'string',
  createdAt: 'Date', // index   default= Date.now()  // compound index  {monitoringId: 1, createdAt: -1}
};

// ------------------------------------- Breakdown Details Schema ---------------------------------------
const breakdownDetailsSchema = {
  breakdownDate: 'Date',
  breakdownTime: 'Date',
  monitoringStartDate: 'Date',
  monitoringEndDate: 'Date',
  reason: 'string',
  monitoringId: 'Integer', // index
  breakdownUrl: 'string',
  createdAt: 'Date', // index   default= Date.now()  // compound index  {monitoringId: 1, createdAt: -1}
};

// ------------------------------------- Grievance Info Schema ---------------------------------------
const grievanceInfoSchema = {
  grievanceDate: 'Date',
  grievanceTime: 'Date',
  monitoringStartDate: 'Date',
  monitoringEndDate: 'Date',
  monitoringId: 'Integer', // index
  grievanceUrl: 'string',
  createdAt: 'Date', // index   default= Date.now()  // compound index  {monitoringId: 1, createdAt: -1}
};

