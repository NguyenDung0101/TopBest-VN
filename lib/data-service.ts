import { config } from "./config"
import regionsData from "../data/regions.json"

export interface Region {
  id: string
  region: string
  description: string
}

class DataService {
  private regions: Region[] = regionsData

  async getRegions(): Promise<Region[]> {
    if (config.useSupabase) {
      // TODO: Implement Supabase integration
      // const { data } = await supabase.from('regions').select('*')
      // return data || []
    }
    return this.regions
  }

  async getRegion(id: string): Promise<Region | null> {
    if (config.useSupabase) {
      // TODO: Implement Supabase integration
      // const { data } = await supabase.from('regions').select('*').eq('id', id).single()
      // return data
    }
    return this.regions.find((region) => region.id === id) || null
  }

  async createRegion(region: Omit<Region, "id">): Promise<Region> {
    if (config.useSupabase) {
      // TODO: Implement Supabase integration
      // const { data } = await supabase.from('regions').insert([region]).select().single()
      // return data
    }
    const newRegion: Region = {
      ...region,
      id: (this.regions.length + 1).toString(),
    }
    this.regions.push(newRegion)
    return newRegion
  }

  async updateRegion(id: string, updates: Partial<Omit<Region, "id">>): Promise<Region | null> {
    if (config.useSupabase) {
      // TODO: Implement Supabase integration
      // const { data } = await supabase.from('regions').update(updates).eq('id', id).select().single()
      // return data
    }
    const index = this.regions.findIndex((region) => region.id === id)
    if (index !== -1) {
      this.regions[index] = { ...this.regions[index], ...updates }
      return this.regions[index]
    }
    return null
  }

  async deleteRegion(id: string): Promise<boolean> {
    if (config.useSupabase) {
      // TODO: Implement Supabase integration
      // const { error } = await supabase.from('regions').delete().eq('id', id)
      // return !error
    }
    const index = this.regions.findIndex((region) => region.id === id)
    if (index !== -1) {
      this.regions.splice(index, 1)
      return true
    }
    return false
  }
}

export const dataService = new DataService()
