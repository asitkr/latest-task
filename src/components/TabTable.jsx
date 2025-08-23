import { useMemo, useState } from "react";
import { itemsPerPageOptions, tableData } from "../utils";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Download, Filter, Search, X } from "lucide-react";

const TabTable = () => {
    const [data] = useState(tableData);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [filters, setFilters] = useState({ status: 'all', role: 'all', department: 'all' });

    // Filter and search data
    // const filteredData = useMemo(() => {
    //     return data.filter(item =>
    //         item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         item.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         item.department.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    // }, [data, searchTerm]);

    const filteredData = useMemo(() => {
        let filtered = data.filter(item => {
            // Text search
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.department.toLowerCase().includes(searchTerm.toLowerCase());

            // Status filter
            const matchesStatus = filters.status === 'all' || item.status === filters.status;

            // Role filter
            const matchesRole = filters.role === 'all' || item.role === filters.role;

            // Department filter
            const matchesDepartment = filters.department === 'all' || item.department === filters.department;

            return matchesSearch && matchesStatus && matchesRole && matchesDepartment;
        });

        return filtered;
    }, [data, searchTerm, filters]);

    // Sort data
    const sortedData = useMemo(() => {
        if (!sortConfig.key) return filteredData;

        return [...filteredData].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
    }, [filteredData, sortConfig]);

    // Paginated data
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return sortedData.slice(startIndex, startIndex + itemsPerPage);
    }, [sortedData, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (value) => {
        setItemsPerPage(parseInt(value));
        setCurrentPage(1);
    };

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
        setCurrentPage(1); // Reset to first page when filter changes
    };

    const clearAllFilters = () => {
        setFilters({
            status: 'all',
            role: 'all',
            department: 'all'
        });
        setSearchTerm('');
        setCurrentPage(1);
    };

    const getActiveFilterCount = () => {
        let count = 0;
        if (filters.status !== 'all') count++;
        if (filters.role !== 'all') count++;
        if (filters.department !== 'all') count++;
        if (searchTerm) count++;
        return count;
    };

    const getStatusBadge = (status) => {
        const baseClasses = "px-3 py-1 rounded-full text-xs font-medium";
        return status === 'Active'
            ? `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400`
            : `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400`;
    };

    const getRoleBadge = (role) => {
        const baseClasses = "px-3 py-1 rounded-full text-xs font-medium";
        switch (role) {
            case 'Admin':
                return `${baseClasses} bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400`;
            case 'Moderator':
                return `${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400`;
            default:
                return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400`;
        }
    };

    return (
        <div className="w-full mx-auto bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 min-h-screen">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                {/* Header */}
                <div className="px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <h1 className="text-2xl font-bold mb-2">User Management</h1>
                    <p className="text-blue-100">Manage your team members and their roles</p>
                </div>

                {/* Controls */}
                <div className="p-6 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        {/* Left side - Items per page and search */}
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Show</label>
                                <div className="relative">
                                    <select
                                        value={itemsPerPage}
                                        onChange={(e) => handleItemsPerPageChange(e.target.value)}
                                        className="appearance-none bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white"
                                    >
                                        {
                                            itemsPerPageOptions && itemsPerPageOptions?.map((option) => (
                                                <option value={option}>{option}</option>
                                            ))
                                        }
                                    </select>
                                    <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-slate-500 pointer-events-none" />
                                </div>
                                <span className="text-sm text-slate-700 dark:text-slate-300">entries</span>
                            </div>

                            <div className="relative">
                                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search users..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                                />
                            </div>
                        </div>

                        {/* Right side - Actions */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                // className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors relative ${showFilters ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }`}
                            >
                                <Filter className="h-4 w-4" />
                                <span className="hidden sm:inline">Filter</span>
                                {getActiveFilterCount() > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {getActiveFilterCount()}
                                    </span>
                                )}
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                                <Download className="h-4 w-4" />
                                <span className="hidden sm:inline">Export</span>
                            </button>
                        </div>
                    </div>

                    {/* Filter Panel */}
                    {showFilters && (
                        <div className="mt-4 p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                                    {/* Status Filter */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Status</label>
                                        <select
                                            value={filters.status}
                                            onChange={(e) => handleFilterChange('status', e.target.value)}
                                            className="bg-white dark:bg-slate-600 border border-slate-300 dark:border-slate-500 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white min-w-[120px]"
                                        >
                                            <option value="all">All Status</option>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>
                                    </div>

                                    {/* Role Filter */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Role</label>
                                        <select
                                            value={filters.role}
                                            onChange={(e) => handleFilterChange('role', e.target.value)}
                                            className="bg-white dark:bg-slate-600 border border-slate-300 dark:border-slate-500 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white min-w-[120px]"
                                        >
                                            <option value="all">All Roles</option>
                                            <option value="Admin">Admin</option>
                                            <option value="Moderator">Moderator</option>
                                            <option value="User">User</option>
                                        </select>
                                    </div>

                                    {/* Department Filter */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Department</label>
                                        <select
                                            value={filters.department}
                                            onChange={(e) => handleFilterChange('department', e.target.value)}
                                            className="bg-white dark:bg-slate-600 border border-slate-300 dark:border-slate-500 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white min-w-[120px]"
                                        >
                                            <option value="all">All Departments</option>
                                            <option value="Engineering">Engineering</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Sales">Sales</option>
                                            <option value="HR">HR</option>
                                            <option value="Design">Design</option>
                                            <option value="Support">Support</option>
                                            <option value="Finance">Finance</option>
                                            <option value="Legal">Legal</option>
                                            <option value="Operations">Operations</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Clear Filters Button */}
                                <div className="flex flex-col items-end">
                                    <X className="text-red-600 cursor-pointer" onClick={() => setShowFilters(false)} />
                                    <button
                                        onClick={clearAllFilters}
                                        className="pl-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-lg transition-colors"
                                    >
                                        Clear All
                                    </button>
                                </div>
                            </div>

                            {/* Active Filters Display */}
                            {getActiveFilterCount() > 0 && (
                                <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-600">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-sm text-slate-600 dark:text-slate-300">Active filters:</span>
                                        {filters.status !== 'all' && (
                                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs rounded-full">
                                                Status: {filters.status}
                                                <button onClick={() => handleFilterChange('status', 'all')} className="hover:bg-blue-200 dark:hover:bg-blue-800 rounded-full p-0.5">
                                                    ×
                                                </button>
                                            </span>
                                        )}
                                        {filters.role !== 'all' && (
                                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 text-xs rounded-full">
                                                Role: {filters.role}
                                                <button onClick={() => handleFilterChange('role', 'all')} className="hover:bg-purple-200 dark:hover:bg-purple-800 rounded-full p-0.5">
                                                    ×
                                                </button>
                                            </span>
                                        )}
                                        {filters.department !== 'all' && (
                                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs rounded-full">
                                                Dept: {filters.department}
                                                <button onClick={() => handleFilterChange('department', 'all')} className="hover:bg-green-200 dark:hover:bg-green-800 rounded-full p-0.5">
                                                    ×
                                                </button>
                                            </span>
                                        )}
                                        {searchTerm && (
                                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 text-xs rounded-full">
                                                Search: "{searchTerm}"
                                                <button onClick={() => setSearchTerm('')} className="hover:bg-orange-200 dark:hover:bg-orange-800 rounded-full p-0.5">
                                                    ×
                                                </button>
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-100 dark:bg-slate-700">
                            <tr>
                                {[
                                    { key: 'name', label: 'Name' },
                                    { key: 'email', label: 'Email' },
                                    { key: 'role', label: 'Role' },
                                    { key: 'department', label: 'Department' },
                                    { key: 'status', label: 'Status' },
                                    { key: 'joinDate', label: 'Join Date' }
                                ].map(({ key, label }) => (
                                    <th
                                        key={key}
                                        onClick={() => handleSort(key)}
                                        className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                                    >
                                        <div className="flex items-center gap-1">
                                            {label}
                                            {sortConfig.key === key && (
                                                <span className="text-blue-500">
                                                    {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                                                </span>
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800">
                            {paginatedData.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                                                {item.name.charAt(0)}
                                            </div>
                                            <div className="font-medium text-slate-900 dark:text-white">{item.name}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{item.email}</td>
                                    <td className="px-6 py-4">
                                        <span className={getRoleBadge(item.role)}>
                                            {item.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{item.department}</td>
                                    <td className="px-6 py-4">
                                        <span className={getStatusBadge(item.status)}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{item.joinDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {/* <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                            Showing {Math.min((currentPage - 1) * itemsPerPage + 1, sortedData.length)} to{' '}
                            {Math.min(currentPage * itemsPerPage, sortedData.length)} of {sortedData.length} entries
                            {searchTerm && ` (filtered from ${data.length} total entries)`}
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => handlePageChange(1)}
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg border border-slate-300 dark:border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                <ChevronsLeft className="h-4 w-4" />
                            </button>

                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg border border-slate-300 dark:border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>

                            <div className="flex gap-1 items-center">
                                {(() => {
                                    const pageNumbers = [];

                                    if (totalPages <= 1) {
                                        // Show all pages if 10 or fewer
                                        for (let i = 1; i <= totalPages; i++) {
                                            pageNumbers.push(
                                                <button
                                                    key={i}
                                                    onClick={() => handlePageChange(i)}
                                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === i
                                                        ? 'bg-blue-600 text-white'
                                                        : 'border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                                                        }`}
                                                >
                                                    {i}
                                                </button>
                                            );
                                        }
                                    } else {
                                        // Always show first page
                                        pageNumbers.push(
                                            <button
                                                key={1}
                                                onClick={() => handlePageChange(1)}
                                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === 1
                                                    ? 'bg-blue-600 text-white'
                                                    : 'border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                                                    }`}
                                            >
                                                1
                                            </button>
                                        );

                                        // Add ellipsis if needed
                                        if (currentPage > 2) {
                                            pageNumbers.push(
                                                <span key="ellipsis1" className="px-2 text-slate-500 dark:text-slate-400">
                                                    ...
                                                </span>
                                            );
                                        }

                                        // Show pages around current page
                                        let startPage = Math.max(2, currentPage - 1);
                                        let endPage = Math.min(totalPages - 1, currentPage + 1);

                                        // Adjust range if we're near the beginning or end
                                        if (currentPage <= 2) {
                                            startPage = 2;
                                            endPage = Math.min(9, totalPages - 1);
                                        } else if (currentPage >= totalPages - 1) {
                                            startPage = Math.max(2, totalPages - 1);
                                            endPage = totalPages - 1;
                                        }

                                        for (let i = startPage; i <= endPage; i++) {
                                            pageNumbers.push(
                                                <button
                                                    key={i}
                                                    onClick={() => handlePageChange(i)}
                                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === i
                                                        ? 'bg-blue-600 text-white'
                                                        : 'border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                                                        }`}
                                                >
                                                    {i}
                                                </button>
                                            );
                                        }

                                        // Add ellipsis if needed
                                        if (currentPage < totalPages - 1) {
                                            pageNumbers.push(
                                                <span key="ellipsis2" className="px-2 text-slate-500 dark:text-slate-400">
                                                    ...
                                                </span>
                                            );
                                        }

                                        // Always show last page
                                        if (totalPages > 1) {
                                            pageNumbers.push(
                                                <button
                                                    key={totalPages}
                                                    onClick={() => handlePageChange(totalPages)}
                                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === totalPages
                                                        ? 'bg-blue-600 text-white'
                                                        : 'border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                                                        }`}
                                                >
                                                    {totalPages}
                                                </button>
                                            );
                                        }
                                    }

                                    return pageNumbers;
                                })()}
                            </div>

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-lg border border-slate-300 dark:border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>

                            <button
                                onClick={() => handlePageChange(totalPages)}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-lg border border-slate-300 dark:border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                <ChevronsRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div> */}
                {/* Pagination */}
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                            Showing {Math.min((currentPage - 1) * itemsPerPage + 1, sortedData.length)} to{' '}
                            {Math.min(currentPage * itemsPerPage, sortedData.length)} of {sortedData.length} entries
                            {searchTerm && ` (filtered from ${data.length} total entries)`}
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => handlePageChange(1)}
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg border border-slate-300 dark:border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                <ChevronsLeft className="h-4 w-4 text-white" />
                            </button>

                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg border border-slate-300 dark:border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                <ChevronLeft className="h-4 w-4 text-white" />
                            </button>

                            <div className="flex gap-1 items-center">
                                {(() => {
                                    const pageNumbers = [];

                                    if (totalPages <= 5) {
                                        // Show all pages if 5 or fewer
                                        for (let i = 1; i <= totalPages; i++) {
                                            pageNumbers.push(
                                                <button
                                                    key={i}
                                                    onClick={() => handlePageChange(i)}
                                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors min-w-[40px] ${currentPage === i
                                                        ? 'bg-blue-500 text-white shadow-md'
                                                        : 'bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 dark:bg-slate-700 dark:border-slate-600 dark:hover:bg-slate-600 dark:text-slate-300'
                                                        }`}
                                                >
                                                    {i}
                                                </button>
                                            );
                                        }
                                    } else {
                                        // Show first 3 pages
                                        for (let i = 1; i <= 3; i++) {
                                            pageNumbers.push(
                                                <button
                                                    key={i}
                                                    onClick={() => handlePageChange(i)}
                                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors min-w-[40px] ${currentPage === i
                                                        ? 'bg-blue-500 text-white shadow-md'
                                                        : 'bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 dark:bg-slate-700 dark:border-slate-600 dark:hover:bg-slate-600 dark:text-slate-300'
                                                        }`}
                                                >
                                                    {i}
                                                </button>
                                            );
                                        }

                                        // Add ellipsis
                                        pageNumbers.push(
                                            <div key="ellipsis" className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-400 min-w-[40px] text-center dark:bg-slate-700 dark:border-slate-600 dark:text-slate-400">
                                                ...
                                            </div>
                                        );

                                        // Show last page
                                        pageNumbers.push(
                                            <button
                                                key={totalPages}
                                                onClick={() => handlePageChange(totalPages)}
                                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors min-w-[40px] ${currentPage === totalPages
                                                    ? 'bg-blue-500 text-white shadow-md'
                                                    : 'bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 dark:bg-slate-700 dark:border-slate-600 dark:hover:bg-slate-600 dark:text-slate-300'
                                                    }`}
                                            >
                                                {totalPages}
                                            </button>
                                        );
                                    }

                                    return pageNumbers;
                                })()}
                            </div>

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-lg border border-slate-300 dark:border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                <ChevronRight className="h-4 w-4 text-white" />
                            </button>

                            <button
                                onClick={() => handlePageChange(totalPages)}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-lg border border-slate-300 dark:border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                <ChevronsRight className="h-4 w-4 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabTable;