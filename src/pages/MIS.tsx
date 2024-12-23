import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MISRecord } from "@/types/registration";

const MIS = () => {
  const [records, setRecords] = useState<MISRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("mis-data") || "[]");
    setRecords(data);
  }, []);

  const filteredRecords = records.filter((record) =>
    Object.values(record).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Management Information System</h1>

      <div className="mb-4">
        <Label htmlFor="search">Search Records</Label>
        <Input
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="max-w-sm"
        />
      </div>

      <ScrollArea className="h-[calc(100vh-200px)] w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Record Count</TableHead>
              <TableHead>Old Reference ID</TableHead>
              <TableHead>District LGD Code</TableHead>
              <TableHead>Block LGD Code</TableHead>
              <TableHead>GP LGD Code</TableHead>
              <TableHead>Village LGD Code</TableHead>
              <TableHead>Data Year</TableHead>
              <TableHead>Govt Scheme Name</TableHead>
              <TableHead>Beneficiary Name</TableHead>
              <TableHead>Mobile Number</TableHead>
              <TableHead>Caste Name</TableHead>
              <TableHead>PWL Ranking</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Email Address</TableHead>
              <TableHead>Beneficiary Aadhaar Card</TableHead>
              <TableHead>Bank Name</TableHead>
              <TableHead>Branch Name</TableHead>
              <TableHead>IFSC Code</TableHead>
              <TableHead>Beneficiary Account Number</TableHead>
              <TableHead>Enquired Surveyor Name</TableHead>
              <TableHead>Eligibility Status After Enquiry</TableHead>
              <TableHead>Proposed By Block</TableHead>
              <TableHead>Block Proposal Date</TableHead>
              <TableHead>Sanctioned By District</TableHead>
              <TableHead>District Sanction Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRecords.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.recordCount}</TableCell>
                <TableCell>{record.oldReferenceID}</TableCell>
                <TableCell>{record.districtLGDCode}</TableCell>
                <TableCell>{record.blockLGDCode}</TableCell>
                <TableCell>{record.gpLGDCode}</TableCell>
                <TableCell>{record.villageLGDCode}</TableCell>
                <TableCell>{record.dataYear}</TableCell>
                <TableCell>{record.govtSchemeName}</TableCell>
                <TableCell>{record.beneficiaryName}</TableCell>
                <TableCell>{record.mobileNumber}</TableCell>
                <TableCell>{record.casteName}</TableCell>
                <TableCell>{record.pwlRanking}</TableCell>
                <TableCell>{record.gender}</TableCell>
                <TableCell>{record.emailAddress}</TableCell>
                <TableCell>{record.beneficiaryAadhaarCard}</TableCell>
                <TableCell>{record.bankName}</TableCell>
                <TableCell>{record.branchName}</TableCell>
                <TableCell>{record.ifscCode}</TableCell>
                <TableCell>{record.beneficiaryAcctNumber}</TableCell>
                <TableCell>{record.enquiredSurveyorName}</TableCell>
                <TableCell>{record.eligibilityStatusAfterEnquiry}</TableCell>
                <TableCell>{record.proposedByBlock}</TableCell>
                <TableCell>{record.blockProposalDate}</TableCell>
                <TableCell>{record.sanctionedByDistrict}</TableCell>
                <TableCell>{record.districtSanctionDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default MIS;
