package com.company;

import java.sql.*;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws SQLException{
        Connection connection = null;
        Dbhelper helper = new Dbhelper();
        PreparedStatement statement = null;
        ResultSet resultSet;
        try {
            connection = helper.getConnection();
            String sql = "delete from city where id = ?";
            statement = connection.prepareStatement(sql);
            statement.setInt(1,4082);

            int result = statement.executeUpdate();
            System.out.println("Kayıt silindi");
        } catch (SQLException exception) {
            helper.showErrorMessage(exception);
        } finally {
            statement.close();
            connection.close();
        }
    }

    public static void selectDemo() throws SQLException {
        Connection connection = null;
        Dbhelper helper = new Dbhelper();
        Statement statement = null;
        ResultSet resultSet;
        try {
            connection = helper.getConnection();
            statement = connection.createStatement();
            resultSet = statement.executeQuery("select Code, Name, Region from country");
            ArrayList<Country> countries = new ArrayList<Country>();
            while (resultSet.next()) {
                countries.add(new Country(
                        resultSet.getString("Code"),
                        resultSet.getString("Name"),
                        resultSet.getString("Region")));
            }
            System.out.println(countries.size());
            System.out.println("Bağlantı oluştu");
        } catch (SQLException exception) {
            helper.showErrorMessage(exception);
        } finally {
            connection.close();
        }
    }

    public static void insertData() throws SQLException {
        Connection connection = null;
        Dbhelper helper = new Dbhelper();
        PreparedStatement statement = null;
        ResultSet resultSet;
        try {
            connection = helper.getConnection();
            String sql = "insert into city (Name, CountryCode, District, Population) values(?, ?, ?, ?)";
            statement = connection.prepareStatement(sql);
            statement.setString(1,"Düzce");
            statement.setString(2,"TUR");
            statement.setString(3,"Turkey");
            statement.setInt(4,5000);

            int result = statement.executeUpdate();
            System.out.println("Kayıt eklendi");
        } catch (SQLException exception) {
            helper.showErrorMessage(exception);
        } finally {
            statement.close();
            connection.close();
        }
    }

    public void updateData() throws SQLException {
        Connection connection = null;
        Dbhelper helper = new Dbhelper();
        PreparedStatement statement = null;
        ResultSet resultSet;
        try {
            connection = helper.getConnection();
            String sql = "update city set population = 80000 where id = 4082";
            statement = connection.prepareStatement(sql);

            int result = statement.executeUpdate();
            System.out.println("Kayıt güncellendi");
        } catch (SQLException exception) {
            helper.showErrorMessage(exception);
        } finally {
            statement.close();
            connection.close();
        }
    }
}
