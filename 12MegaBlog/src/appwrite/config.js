import conf from "../config/config";
import { Client, ID ,Databases , Query} from "appwrite";

export class DatabaseService {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage , status, userId}) {
        try {
            return await this.databases.createDocument({
            databaseId: conf.appwriteDatabaseId,
            collectionId: conf.appwriteCollectionId,
            documentId: ID.unique(),
            data: {
                title,
                slug,
                content,
                featuredImage,
                status,
                userId
            }
        })
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    }

    async updatePost(slug,{title, content, featuredImage , status}) {
        try {
            const posts = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            console.error("Error updating post:", error);
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                 conf.appwriteDatabaseId,
                 conf.appwriteCollectionId,
                 slug
            );
            return true;
        } catch (error) {
            console.error("Error deleting post:", error);
            throw error;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        }catch (error) {
            console.error("Error fetching post:", error);
            throw error;
        }
    }

    async getPostByStatus( queries=[Query.equal("status", "active")] ) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            );
        } catch (error) {
            console.error("Error fetching posts by status:", error);
            throw error;
        }
    }

    async uploadFile(file) {
        try{
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        }catch(error){
            console.error("Error uploading file:", error);
            throw error;
        }
    }

    async deleteFile(fileId) {
        try{
            return await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            );    
        }catch(error){
            console.error("Error deleting file:", error);
            throw error;
        }
    }
   
    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
    }
}

const service = new DatabaseService()
export default service;