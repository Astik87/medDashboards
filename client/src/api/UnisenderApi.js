import {authHost} from "@api/Main";
import {gridDensityRowHeightSelector} from "@mui/x-data-grid";
import axios from "axios";

class UnisenderApi {
    async getCampaigns(dateFrom, dateTo, limit, page) {
        try {
            const response = await authHost.get('/api/unisender/getCampaigns', {params: {dateFrom: dateFrom.getTime(), dateTo: dateTo.getTime(), limit, page}})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    async getCampaignDeliveryStats(campaignId) {
        try {
            const response = await authHost.get('/api/unisender/getCampaignDeliveryStats', {params: {campaignId}})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    async getTaskResult(uuid) {
        try {
            const response = await authHost.get('/api/unisender/getTaskResult', {params: {uuid}})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }

    async getStatisticFromFile(fileUrl) {
        try {
            const response = await authHost.get('/api/unisender/getStatisticFromFile', {params: {fileUrl}})

            return {success: true, data: response.data}
        } catch (error) {
            return {success: false, message: error.message}
        }
    }
}

export default new UnisenderApi()